"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-5 py-4 shadow-sm md:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <Link href="/" className="text-gray-800">
          <h1 className="text-xl font-bold capitalize md:text-3xl">
            Hi {name}
          </h1>
        </Link>
      </div>

     
      <div className="flex items-center gap-6">
        
        <Link href="/notification" className="relative">
          <i className="ri-notification-3-fill ri-lg text-primary text-xl" />
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[0.75rem] text-white">
            2
          </span>
        </Link>

       
        <Link href="/Userprofile" className="block">
          <div className="relative h-10 w-10">
            <Image
              src={ "/image/profile.svg"}
              alt="Profile"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
