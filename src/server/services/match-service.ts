import { Workspace, CollectionService } from "@rbxts/services";
import { Components } from "@flamework/components";
import { OnInit, OnPhysics, OnStart, OnTick, Service } from "@flamework/core";
import { Court } from "server/components/court";

@Service({})
export class MatchService implements OnStart, OnInit, OnPhysics {
	constructor(private readonly components: Components) {}

	public onInit(): void | Promise<void> {}

	public onStart(): void {
		const courts = Workspace.FindFirstChild("Courts");

		if (courts !== undefined) {
			courts?.GetChildren().forEach((child) => {
				if (
					!child.IsA("Model") ||
					!child.FindFirstChild("Floor") ||
					!child.FindFirstChild("Net") ||
					!child.FindFirstChild("Pickleball") ||
					!child.FindFirstChild("Walls")
				) {
					warn(child, "not a PickleBall Court");
					return;
				}

				CollectionService.AddTag(child, "court");
			});
		} else {
			warn('Missing Workspace child "Courts"');
		}
	}

	public onPhysics(dt: number, time: number): void {
		this.getCourts().forEach((court) => {
			court.updateBall(dt, time);
		});
	}

	public getCourts(): Court[] {
		return this.components.getAllComponents<Court>();
	}
}
