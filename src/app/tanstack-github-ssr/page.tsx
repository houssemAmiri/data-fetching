import GithubCart from "@/component/GithubCart";
import { queryFn, queryKey } from "@/hooks/useGithubQuery";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function TanstackGithubSSR() {

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey,
        queryFn,
    })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <GithubCart />
        </HydrationBoundary>
    );
}
