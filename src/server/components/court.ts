import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import { Workspace } from "@rbxts/services";

interface CourtModel extends Model {
	Pickleball: Model & { Primary: Part };
	Net: Model;
	Walls: Model;
	Floor: Model;
}

interface BallState {
	velocity: Vector3;
	gravity: Vector3;
	restitution: number;
	pendingTime: number;
	raycastParams: RaycastParams;
	supportNormal?: Vector3;
}

@Component({ tag: "court" })
export class Court extends BaseComponent<{}, CourtModel> implements OnStart {
	private ballState?: BallState;

	public onStart(): void {
		const ball = this.instance.Pickleball;
		const params = new RaycastParams();
		params.FilterType = Enum.RaycastFilterType.Exclude;
		params.FilterDescendantsInstances = [ball];
		params.RespectCanCollide = false;

		this.ballState = {
			velocity: new Vector3(0, 0, 0),
			gravity: new Vector3(0, -60, 0),
			restitution: 0.8,
			pendingTime: 0,
			raycastParams: params,
		};

		ball.Primary.Anchored = true;
	}

	public updateBall(dt: number, _time: number): void {
		if (dt <= 0 || dt !== dt || dt === math.huge) {
			return;
		}

		const state = this.ballState;
		if (state === undefined) {
			return;
		}

		const ball = this.instance.Pickleball;
		const ballPrimary = ball.Primary;
		const maxStep = 1 / 120;
		const separation = 0.001;
		const restSpeed = 0.5;
		const restitution = math.clamp(state.restitution, 0, 1);
		const size = ballPrimary.Size;
		const radius = math.max(size.X, size.Y, size.Z) / 2;

		const params = state.raycastParams;

		let position = ballPrimary.Position;
		let velocity = state.velocity;
		state.pendingTime += dt;

		// Bound work per update, retaining elapsed time that has not been simulated.
		for (let step = 0; step < 16 && state.pendingTime > 0; step++) {
			const stepTime = math.min(state.pendingTime, maxStep);
			state.pendingTime -= stepTime;
			let remainingTime = stepTime;
			let acceleration = state.gravity;

			const supportNormal = state.supportNormal;
			if (supportNormal !== undefined) {
				const support = Workspace.Spherecast(position, radius, supportNormal.mul(-separation * 4), params);
				if (
					support !== undefined &&
					support.Normal.Dot(supportNormal) > 0.95 &&
					velocity.Dot(support.Normal) <= 1e-4 &&
					state.gravity.Dot(support.Normal) < 0
				) {
					const normal = support.Normal;
					state.supportNormal = normal;
					velocity = velocity.sub(normal.mul(velocity.Dot(normal)));
					acceleration = acceleration.sub(normal.mul(math.min(acceleration.Dot(normal), 0)));
				} else {
					state.supportNormal = undefined;
				}
			}

			for (let impact = 0; impact < 4 && remainingTime > 0; impact++) {
				const movement = velocity.mul(remainingTime).add(acceleration.mul(0.5 * remainingTime * remainingTime));
				const distance = movement.Magnitude;
				if (distance < 1e-8) {
					velocity = velocity.add(acceleration.mul(remainingTime));
					remainingTime = 0;
					break;
				}

				const hit = Workspace.Spherecast(position, radius, movement, params);
				if (hit === undefined) {
					position = position.add(movement);
					velocity = velocity.add(acceleration.mul(remainingTime));
					remainingTime = 0;
					break;
				}

				// Distance is center travel; hit.Position is the surface contact point.
				const fraction = math.clamp(hit.Distance / distance, 0, 1);
				const elapsed = remainingTime * fraction;
				const normal = hit.Normal;
				// Retreat along the checked path; a normal offset could enter a neighboring surface.
				const safeFraction = math.max(hit.Distance - separation, 0) / distance;
				position = position.add(movement.mul(safeFraction));
				velocity = velocity.add(acceleration.mul(elapsed));
				remainingTime -= elapsed;

				const normalSpeed = velocity.Dot(normal);
				if (normalSpeed < 0) {
					velocity = velocity.sub(normal.mul((1 + restitution) * normalSpeed));

					if (-normalSpeed * restitution <= restSpeed && state.gravity.Dot(normal) < 0) {
						// Keep sideways motion, but suppress gravity and tiny rebounds into support.
						velocity = velocity.sub(normal.mul(velocity.Dot(normal)));
						acceleration = acceleration.sub(normal.mul(math.min(acceleration.Dot(normal), 0)));
						state.supportNormal = normal;
					} else if (state.supportNormal !== undefined && state.supportNormal.Dot(normal) > 0.95) {
						state.supportNormal = undefined;
						acceleration = state.gravity;
					}
				}
			}

			// At the impact limit, hold the last safe position for the rest of this interval.
			velocity = velocity.add(acceleration.mul(remainingTime));
		}

		state.velocity = velocity;
		ballPrimary.CFrame = ballPrimary.CFrame.Rotation.add(position);
	}
}
