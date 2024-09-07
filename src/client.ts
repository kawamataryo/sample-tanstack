import { ofetch } from "ofetch";
import FingerprintJS from '@fingerprintjs/fingerprintjs'

const API_URL = "https://tanstack-test-todo-server.ba068082.workers.dev"
// const API_URL = "http://localhost:8787"

export const addTodo = async (title: string) => {
	const fp = await FingerprintJS.load();
	const { visitorId } = await fp.get();

	await ofetch(`${API_URL}/todo_items`, {
		method: "POST",
		body: { title },
		mode: "cors",
		headers: {
			"Fingerprint": visitorId
		},
	 });
};

export const removeTodo = async (id: number) => {
	const fp = await FingerprintJS.load();
	const { visitorId } = await fp.get();

	await ofetch(`${API_URL}/todo_items/${id}`, {
		method: "DELETE",
		mode: "cors",
		headers: {
			"Fingerprint": visitorId
		},
	});
};

export const getTodos = async () => {
	const fp = await FingerprintJS.load();
	const { visitorId } = await fp.get();

	return await ofetch<{
		id: number;
		title: string;
	}[]>(`${API_URL}/todo_items`, {
		mode: "cors",
		headers: {
			"Fingerprint": visitorId
		},
	});
};
