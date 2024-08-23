'use client'
import { useEffect, useState } from "react";

export default function GithubClient() {
    const [data, setData] = useState<any>(undefined)
    useEffect(() => {
        const fetchData = () => {
            fetch(
                `https://api.github.com/repos/tanstack/react-query`
            ).then((res) => res.json()).then((res) => setData(res))
        }
        fetchData()
    }, [])
    console.log("client \n", data)
    return (
        <div>
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>
        </div>
    );
}
