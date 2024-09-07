import { removeTodo } from "@/client";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

export function useRemoveTodoMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id: number) => {
			await removeTodo(id);
			return id;
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
	});
}
