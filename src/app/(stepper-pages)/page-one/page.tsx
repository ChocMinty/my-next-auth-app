"use client";

import { steps } from "@/types";
import { useRouter } from "next/navigation";

export default function PageTwo(){
    const router = useRouter();

    const handleNext = () => {
        const path = steps[1].path;
        if (path)
        {
            router.push(path);
        }
    }
    return <div><div>Page Two</div>
    <div><button onClick={() => handleNext()}>next...</button></div></div>
}