import { Suspense } from "react";

export default async function Cart() {
    const data: any = await fetch(
        `https://api.github.com/repos/tanstack/react-query`,

    ).then((res) => res.json()
    )
    console.log("server*************************** \n", data)

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>

        </div>
    );
}
