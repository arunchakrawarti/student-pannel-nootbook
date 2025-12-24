import React from 'react';
import Link from 'next/link';
import BaseCard from '@/components/molecules/BaseCard';

const SubjectList = () => {
  const subjects = [
    { title: "All Materials", no: "45", isActive: true },
    { title: "Polity", no: "12", isActive: false },
    { title: "History", no: "10", isActive: false },
    { title: "Geography", no: "8", isActive: false },
    { title: "Economy", no: "9", isActive: false },
    { title: "Science & Tech", no: "6", isActive: false },
  ];

  return (
    <div
      className="flex items-center gap-6 overflow-x-auto bg-white max-w-fit mt-8 no-scrollbar px-4 rounded-md py-2 cursor-grab active:cursor-grabbing select-none"
      style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {subjects.map((item, i) => (
        <Link href={`/all-material/${item.title.toLowerCase()}`} key={i}>
          <BaseCard
            variant="filter"
            label={item.title}
            value={item.no}
            isActive={item.isActive}
          />
        </Link>
      ))}
    </div>
  );
};

export default SubjectList;