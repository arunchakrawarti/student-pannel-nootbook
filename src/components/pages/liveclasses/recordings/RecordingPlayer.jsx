import recording from "../../../../../public/db/recording.json"
import chat from "../../../../../public/db/chat.json"
import participants from "../../../../../public/db/participants.json"
import { MdOutlineManageAccounts, MdOutlineArrowBack } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
import Image from 'next/image'
import React from 'react'
import Button from '@/components/comman/Button';
import SessionOverviewCard from '@/components/molecules/SessionOverviewCard';
import ConversationCard from "@/components/molecules/ConversationCard";

const RecordingPlayer = () => {
    return (
        <div className="w-full px-3 sm:px-5 lg:px-0">


            <div className="flex items-center gap-2 sm:gap-3 mt-2 mb-5">
                <MdOutlineArrowBack className="text-[20px] sm:text-[22px]" />
                <h2 className="font-inter font-medium text-[14px] sm:text-[16px] md:text-[18px]">
                    Back to Courses
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[75%]">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between bg-white border border-gray-100 rounded-xl p-4 mb-3 gap-3">
                        <div>
                            <h1 className="font-inter text-[16px] sm:text-[18px] font-normal">
                                Geography - Climate Patterns & Monsoon
                            </h1>
                            <p className="font-inter text-[14px] sm:text-[16px] mt-1 sm:mt-2 text-gray-600">
                                Instructor: Dr. Ramesh Kumar
                            </p>
                        </div>

                        <div>
                            <Button className="flex items-center bg-[#FB2C36] gap-2 px-3 py-1.5 text-white text-xs sm:text-sm w-fit">
                                <span className="w-2 h-2 rounded-full bg-red-200 inline-block"></span>
                                LIVE
                            </Button>
                        </div>
                    </div>
                    <div className="w-full">
                        <Image
                            src="/img/recording.png"
                            height={537}
                            width={927}
                            alt="recording"
                            className="w-full h-auto rounded-md object-cover"
                        />
                    </div>
                    <div className="mt-5 bg-white border border-gray-200 rounded-md p-3 sm:p-4">
                        <h2 className="font-inter text-[14px] sm:text-[16px] md:text-[17px] mb-5">
                            Session Notes
                        </h2>
                        <SessionOverviewCard items={recording} />
                    </div>
                </div>


                <div className="w-full lg:w-[25%] space-y-4">


                    <div className="bg-white px-3 py-2 rounded-lg">
                        <div className="flex items-center gap-2 px-2">
                            <MdOutlineManageAccounts size={22} />
                            <h2 className="font-inter font-normal text-[14px] sm:text-[16px] tracking-[-0.31px] py-2">
                                Participants (5)
                            </h2>
                        </div>

                        {participants.map((item, index) => (
                            <ConversationCard key={index} {...item} />
                        ))}
                    </div>
                    <div className="bg-white px-3 py-2 rounded-lg">
                        <div className="flex items-center gap-2 px-2">
                            <IoChatboxOutline size={18} />
                            <h2 className="font-inter font-normal text-[14px] sm:text-[16px] tracking-[-0.31px] py-2">
                                Chat
                            </h2>
                        </div>

                        {chat.map((item, index) => (
                            <ConversationCard key={index} {...item} />
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <input
                            type="text"
                            placeholder="Type a message"
                            className="w-full sm:flex-1 bg-gray-200 px-3 py-2 rounded-md text-sm outline-none"
                        />
                        <Button className="text-white w-full sm:w-auto px-5 py-2 text-sm">
                            Send
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecordingPlayer
