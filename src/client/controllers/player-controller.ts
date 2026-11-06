import { Players, CollectionService } from "@rbxts/services";
import { Components } from "@flamework/components";
import { Controller, OnStart } from "@flamework/core";
import { Paddle } from "client/components/paddle";
import { waitForChildWithType } from "shared/util/wait-for-child";

const toolComponentTags = new Map([["Paddle", "paddle"]]);

@Controller({})
export class PlayerController implements OnStart {
	constructor(private readonly components: Components) {}

	private tools!: Tool[];

	public onStart(): void {
		this.tools = [];

		if (this.getPlayer().Character !== undefined) {
			this.onCharacterAdded(this.getPlayer().Character as Model);
		}

		waitForChildWithType(this.getPlayer(), "Backpack", "Backpack", 5)
			.then((backpack) => this.setupBackpack(backpack))
			.catch(warn);

		this.getPlayer().ChildAdded.Connect((child) => {
			if (child.IsA("Backpack")) {
				this.setupBackpack(child);
			}
		});
	}

	private setupBackpack(backpack: Backpack) {
		backpack.GetChildren().forEach((child) => {
			if (!child.IsA("Tool")) {
				return;
			}

			this.setupTool(child);
		});

		backpack.ChildAdded.Connect((child) => {
			if (!child.IsA("Tool")) {
				return;
			}

			this.setupTool(child);
		});
	}

	private setupTool(tool: Tool) {
		if (this.tools.includes(tool)) {
			return;
		}

		const toolComponentTag = toolComponentTags.get(tool.Name);

		if (toolComponentTag !== undefined) {
			CollectionService.AddTag(tool, toolComponentTag);
		}

		this.tools.push(tool);
	}

	public getPlayer() {
		return Players.LocalPlayer;
	}

	public getPaddles(): Paddle[] {
		return this.components.getAllComponents<Paddle>();
	}

	private onCharacterAdded(character: Model) {
		const tool = character.FindFirstChildOfClass("Tool");

		if (tool !== undefined) {
			this.setupTool(tool);
		}
	}
}
