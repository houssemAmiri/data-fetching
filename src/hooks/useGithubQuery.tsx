import { useQuery } from "@tanstack/react-query"

export const queryKey = ['github']
export const queryFn = () => fetch(
    `https://api.github.com/repos/tanstack/react-query`
).then((res) => res.json())

function useGithubQuery() {
    return useQuery({
        queryKey,
        queryFn,
    })


}
export default useGithubQuery