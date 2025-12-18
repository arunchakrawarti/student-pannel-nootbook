"use client"
import Image from "next/image";
import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdLogout, MdOutlineManageAccounts, MdSearch } from "react-icons/md";

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-between sm:justify-end w-full">
      <div className="flex items-center bg-white rounded-3xl py-2 px-3 shadow w-full sm:w-auto">
        <input
          placeholder="Search..."
          className="outline-none w-full sm:w-[150px] md:w-[200px] text-[14px] sm:text-[16px]"
        />
        <MdSearch size={22} className="text-gray-600" />
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="relative cursor-pointer w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full overflow-hidden"
      >
        <Image
          src="/img/profile.png"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>

      {open && (
        <div className="absolute top-[50px] right-0 bg-white rounded-md shadow p-3 w-[250px] z-50">

          <div className="flex items-center gap-4 py-3 border-b">
            <MdOutlineManageAccounts size={22} className="text-yellow-500" />
            <span className="text-[16px]">Lazarus Honhaga</span>
          </div>

          <div className="flex items-center gap-4 py-3 border-b">
            <FiPhoneCall size={22} className="text-yellow-500" />
            <span className="text-[16px]">7909072785</span>
          </div>

          <div className="flex items-center gap-4 py-3 cursor-pointer">
            <MdLogout size={22} className="text-yellow-500" />
            <span className="text-[16px]">Logout</span>
          </div>

        </div>
      )}
    </div>
  );
};

export default Profile;
