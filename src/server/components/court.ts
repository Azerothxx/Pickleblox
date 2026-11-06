import { BaseComponent, Component } from "@flamework/components";

interface CourtModel extends Model {
	Pickleball: Model;
	Net: Model;
	Walls: Model;
	Floor: Model;
}

@Component({ tag: "court" })
export class Court extends BaseComponent<{}, CourtModel> {
	updateBall(dt: number) {}
}
