import { removeTodo } from "@/client";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

export function useRemoveTodoMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: string) => {
			await removeTodo(id);
			return id;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
	});
}
