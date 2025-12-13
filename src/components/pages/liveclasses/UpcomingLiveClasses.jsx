"use client"
import React, { useState } from 'react'
import upcoming from "../../../../public/db/upcoming.json"
import Card3 from '@/components/molecules/Card3'
import { Button } from '@/components/comman/Button'

const UpcomingLiveClasses = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-5">
     
      <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 items-center bg-gray-50 w-full sm:w-[230px] rounded-md shadow">
        <Button
          onClick={() => setActiveTab("recordings")}
          className={`cursor-pointer  ${
            activeTab === "recordings" ? "bg-gray-200" : "bg-transparent"
          }`}
        >
          Recordings
        </Button>
        <Button
          onClick={() => setActiveTab("upcoming")}
          className={`${
            activeTab === "upcoming" ? "bg-gray-200" : "bg-transparent"
          }`}
        >
          Upcoming
        </Button>
      </div>
      <div className="mt-5 bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-3">Upcoming Live Classes</h3>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
          {upcoming.map((session) => (
            <Card3
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
