import Cart from "@/component/cart";
import { Suspense } from "react";

export default async function GithubServer() {


    return (
        <div>
            <Suspense fallback={<h1>Loaading ..............</h1>}>
                <Cart />
            </Suspense>

        </div>
    );
}
