import Image from 'next/image';
import React from 'react';
import { MdSearch } from "react-icons/md";

const Profile = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-between sm:justify-end w-full">

      <div className="flex items-center bg-white rounded-3xl py-2 px-3 shadow w-full sm:w-auto">
        <input 
          placeholder="Search..."
          className="outline-none w-full sm:w-[150px] md:w-[200px] lg:w-[200px] text-[14px] sm:text-[16px]"
        />
        <MdSearch size={22} className="text-gray-600" />
      </div>

      <div className="relative w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full overflow-hidden">
        <Image
          src="/img/profile.png"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
};

export default Profile;
