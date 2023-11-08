import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"



export const metadata : Metadata = {
    title: 'Magic Post',
    description: 'A Next.js 13 Meta Threads Application',
}

interface Props {
    children : React.ReactNode;
}

const inter = Inter({subsets:["latin"]})


function RootLayout({children}: Props) {
    return (
        <>
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-fun-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
        </>
    )
}


export default RootLayout;