import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My next-auth app poc",
    description: "This is my attempt to create a multi-form next-auth app with redis"

}
export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>){
    return <><div>Layout 1</div>{children}</>
}