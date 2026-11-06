import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";

@Component({ tag: "paddle" })
export class Paddle extends BaseComponent<{}, Tool> implements OnStart {
	public onStart(): void {
		this.instance.RequiresHandle = false;
		this.instance.Activated.Connect(() => this.onActivated());
	}

	private onActivated() {}
}
