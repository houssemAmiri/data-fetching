
'use client'
import useGithubQuery, { queryFn, queryKey } from "@/hooks/useGithubQuery";

export default function TanstackGithubClient() {


    const { isPending, isError, data, error } = useGithubQuery()

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
        </div>
    );
}
