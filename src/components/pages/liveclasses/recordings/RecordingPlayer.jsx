import { Button } from '@/components/comman/Button'
import Coursecard1 from '@/components/molecules/Coursecard1'
import recording from "../../../../../public/db/recording.json"
import chat from "../../../../../public/db/chat.json"
import participants from "../../../../../public/db/participants.json"
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
import Image from 'next/image'
import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import LessonCard from '@/components/molecules/LessionCard'

const RecordingPlayer = () => {
    return (
        <div className="p-3">

            {/* Back Header */}
            <div className="flex items-center gap-3 mt-2 mb-5">
                <MdOutlineArrowBack className="text-[22px]" />
                <h2 className="font-inter font-medium text-[15px] md:text-[18px]">
                    Back to Courses
                </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="flex justify-between items-start flex-wrap mb-3 gap-3">
                        <div>
                            <h1 className="font-inter font-semibold text-[16px] md:text-[20px] leading-[24px]">
                                Geography - Climate Patterns & Monsoon
                            </h1>
                            <p className="font-inter text-[13px] md:text-[14px] text-gray-600">
                                Instructor: Dr. Ramesh Kumar
                            </p>
                        </div>

                        <Button className="flex items-center gap-2 text-white text-sm">
                            <span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>
                            LIVE
                        </Button>
                    </div>
                    <Image
                        src="/img/recording.png"
                        height={537}
                        width={827}
                        alt="recording"
                        className="w-full h-auto rounded-md"
                    />
                    <div className="mt-5 bg-white border border-gray-200 rounded-md shadow p-4">
                        <h2 className="font-inter text-[15px] md:text-[17px] mb-3">
                            Session Notes
                        </h2>
                        <Coursecard1 items={recording} />
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="bg-white rounded-lg shadow">
                        <div className='flex items-center ml-3'>
                            <MdOutlineManageAccounts size={25} />

                            <h2 className="font-inter font-normal text-[16px] leading-[16px] tracking-[-0.31px] p-3">
                                Participants (5)
                            </h2>
                        </div>

                        {participants.map((item, index) => (
                            <LessonCard key={index} {...item} />
                        ))}
                    </div>


                    <div className="bg-white rounded-lg shadow">
                        <div className='flex items-center ml-3'>
                            <IoChatboxOutline size={20} />

                            <h2 className="font-inter font-normal text-[16px] leading-[16px] tracking-[-0.31px] p-3">
                                Chat
                            </h2>
                        </div>

                        {chat.map((item, index) => (
                            <LessonCard key={index} {...item} />
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-3">
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
