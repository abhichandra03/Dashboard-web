import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-600 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>

          <span className="border-b-[1px] border-black w-full p-2"></span>

          <Link href="/">
            <div className="bg-gray-200 p-3 rounded-lg inline-block my-4 hover:bg-gray-400 cursor-pointer">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-200 p-3 rounded-lg inline-block my-4 hover:bg-gray-400 cursor-pointer">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-200 p-3 rounded-lg inline-block my-4 hover:bg-gray-400 cursor-pointer">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
        </div>

        <div className="mb-4">
          <div className=" bg-white rounded-full w-full h-[50px]">
            <Image
              src="/profile1.jpg"
              width={50}
              height={50}
              alt="Author"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      <main className="w-screen ml-20">{children}</main>
    </div>
  );
};

export default Sidebar;
