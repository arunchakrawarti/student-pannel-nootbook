import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/comman/Button";

const Profile = () => {
  return (
    <div className="w-full">
      <div className="mt-3">
        <h1 className="font-inter font-medium text-[24px] leading-9 tracking-[0.07px]">
          Profile
        </h1>
        <p className="font-inter mt-2 font-normal text-[16px] leading-6 tracking-[-0.31px]">
          Manage your account settings and preferences
        </p>
      </div>

      <div
        className="
          mt-4 w-full rounded-lg 
          bg-[linear-gradient(90deg,rgba(255,96,41,0.1)_0%,rgba(22,52,78,0.1)_100%)]
          p-6
        "
      >
        <div
          className="
            flex flex-col 
            md:flex-row md:items-center md:justify-between 
            gap-5
          "
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="h-[80px] w-[80px] bg-[var(--color-accent-orange)] rounded-full flex justify-center items-center">
              <p className="font-inter text-white font-normal text-[32px] tracking-[0.4px]">
                R
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h2 className="font-inter font-medium text-[18px] leading-6">
                Rahul Sharma
              </h2>
              <p className="font-inter font-normal mt-2 text-[15px] leading-5">
                UPSC CSE 2025 - Batch A
              </p>

              <div
                className="
                  flex flex-col sm:flex-row 
                  items-center sm:items-start 
                  gap-2 sm:gap-4 mt-2
                "
              >
                <div className="flex items-center gap-1 text-gray-700">
                  <MdOutlineEmail size={16} />
                  <p className="font-inter text-[14px] leading-5 tracking-[-0.15px]">
                    rahul.sharma@email.com
                  </p>
                </div>

                <div className="flex items-center gap-1 text-gray-700">
                  <IoCallOutline size={16} />
                  <p className="font-inter text-[14px] leading-5 tracking-[-0.15px]">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link href="/edit-profile">
            <Button
              className=" max-w-full
              flex items-center justify-center gap-2
               text-white
            "
            >
              <FiEdit size={16} /> Edit Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
