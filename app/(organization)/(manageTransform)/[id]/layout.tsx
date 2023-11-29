import { Header } from "@/components/Shared/Header";
import { Sidebar } from "@/components/Shared/Sidebar";
import { sideBarManageTransform } from "@/components/Shared/Sidebar/constant";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "@/a"

export const metadata: Metadata = {
  title: "Magic Post",
  description: "A Next.js 13 Meta Threads Application",
};

interface Props {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }: Props) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} `}>
          <Header />
          <div className="flex">
            <Sidebar data={sideBarManageTransform} />
            <div className='flex-1'> {children}</div>
          </div>
        </body>
      </html>
    </>
  );
}

export default RootLayout;
