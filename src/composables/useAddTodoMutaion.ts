import { addTodo } from "@/client";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

export function useAddTodoMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (content: string) => {
			return await addTodo(content);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
	});
}
