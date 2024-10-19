"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (session) {
        return (
            <div>
                <p>Welcome, {session.user?.email}!</p>
                <button onClick={() => signOut({ callbackUrl: "/" })}>Logout</button>
            </div>
        );
    }

    return (
        <button onClick={() => signIn("google", { callbackUrl: "/" })}>
            Login with Google
        </button>
    );
}
