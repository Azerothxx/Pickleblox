import { Components } from "@flamework/components";
import { OnInit, OnPhysics, OnStart, OnTick, Service } from "@flamework/core";
import { Court } from "server/components/court";

@Service({})
export class MatchService implements OnStart, OnInit, OnPhysics {
	constructor(private readonly components: Components) {}

	public onStart(): void {}

	public onInit(): void | Promise<void> {}

	public onPhysics(dt: number, time: number): void {}

	public getCourts(): Court[] {
		return this.components.getAllComponents<Court>();
	}
}
