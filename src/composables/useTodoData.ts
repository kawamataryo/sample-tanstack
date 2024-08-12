import { getTodos } from "@/client";
import { useQuery } from "@tanstack/vue-query";

export const useTodosData = () => {
	return useQuery({
		queryKey: ["todos"],
		queryFn: getTodos,
    staleTime: 1000 * 10, // 10秒後にstaleになる
    gcTime: 1000 * 1, // inactiveになると1秒後にGCされる
    refetchOnWindowFocus: false, // ウィンドウがフォーカスされたときに再取得しない
	});
};
