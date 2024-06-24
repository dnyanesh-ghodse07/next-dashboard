import Footer from "@/components/dashboard-ui/footer";
import Header from "@/components/dashboard-ui/header";
import Sidebar from "@/components/dashboard-ui/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-screen h-screen">
      <div className="p-2 flex-1">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full bg-slate-100">
        <div>
          <Header />
        </div>
        <div className="flex-1 bg-slate-100 p-2">
          <div className="bg-slate-300 h-full rounded-md p-2">{children}</div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
