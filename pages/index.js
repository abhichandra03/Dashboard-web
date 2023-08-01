import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen text-black">
      <Header />
      <TopCards />
      <div className="grid lg:grid-cols-3 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
}
