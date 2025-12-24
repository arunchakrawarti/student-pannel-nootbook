"use client"
import React, { useState } from 'react'
import upcoming from "../../../../public/db/upcoming.json"
import InfoListCard from '@/components/molecules/InfoListCard'


const UpcomingLiveClasses = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="w-full mt-4">

      <div className="w-full sm:w-[390px] bg-white rounded-full p-1 flex">
        <button
          onClick={() => setActiveTab("recordings")}
          className={`flex-1 text-center py-2 rounded-full text-sm font-medium transition-all
          ${activeTab === "recordings"
              ? "bg-[#F2F2F2] text-black"
              : "bg-transparent text-gray-500"
            }`}
        >
          Recordings
        </button>
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`flex-1 text-center py-2 rounded-full text-sm font-medium transition-all
          ${activeTab === "upcoming"
              ? "bg-[#F2F2F2] text-black"
              : "bg-transparent text-gray-500"
            }`}
        >
          Upcoming
        </button>
      </div>
      <div className="mt-5 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-inter font-normal text-[18px] tracking-[-0.31px]">Upcoming Live Classes</h3>
        <div className="grid grid-cols-1 mt-5 lg:grid-cols-1 gap-4">
          {upcoming.map((session) => (
            <InfoListCard
              key={session.id}
              type={session.type}
              sessionTitle={session.sessionTitle}
              sessionBy={session.sessionBy}
              sessionDate={session.sessionDate}
              sessionTime={session.sessionTime}
              sessionDuration={session.sessionDuration}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UpcomingLiveClasses
