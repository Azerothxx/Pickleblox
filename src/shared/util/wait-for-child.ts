/** Rejects if a timed wait returns nil. Omitting timeout waits indefinitely. */
export function waitForChild(parent: Instance, childName: string, timeout?: number): Promise<Instance> {
	return new Promise<Instance>((resolve, reject) => {
		const child = timeout === undefined ? parent.WaitForChild(childName) : parent.WaitForChild(childName, timeout);

		if (child === undefined) {
			reject(`WaitForChild("${childName}") returned nil under ${parent.GetFullName()}`);
			return;
		}

		resolve(child);
	});
}

/** Rejects if the child is missing or is not an instance of the requested class. */
export function waitForChildWithType<T extends keyof Instances>(
	parent: Instance,
	childName: string,
	className: T,
	timeout?: number,
): Promise<Instances[T]> {
	return new Promise<Instances[T]>((resolve, reject) => {
		const child = timeout === undefined ? parent.WaitForChild(childName) : parent.WaitForChild(childName, timeout);

		if (child === undefined) {
			reject(`WaitForChild("${childName}") returned nil under ${parent.GetFullName()}`);
			return;
		}

		if (!child.IsA(className)) {
			reject(`Expected "${childName}" under ${parent.GetFullName()} to be ${className}, got ${child.ClassName}`);
			return;
		}

		resolve(child);
	});
}
