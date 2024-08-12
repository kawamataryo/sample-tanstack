declare global {
	interface Window {
		items: { id: string; title: string }[];
	}
}

const wait = (time = 500) => {
	return new Promise((r) => setTimeout(r, time));
};

export const initializeDb = () => {
	window.items = [
		{
			id: crypto.randomUUID(),
			title: "foo",
		},
		{
			id: crypto.randomUUID(),
			title: "bar",
		},
	];
};

export const addTodo = async (title: string) => {
  console.log("🌐 called addTodo");
	await wait();
	window.items = [
		...window.items,
		{
			id: crypto.randomUUID(),
			title: title,
		},
	];
	return window.items;
};

export const removeTodo = async (id: string) => {
  console.log("🌐 called removeTodo");
	await wait();
	window.items = window.items.filter((todo) => todo.id !== id);
};

export const getTodos = async () => {
  console.log("🌐 called getTodos");
	await wait(500);
	return window.items;
};
