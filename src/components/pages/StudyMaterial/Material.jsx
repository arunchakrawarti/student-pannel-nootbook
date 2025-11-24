import Card5 from '@/components/molecules/Card5';
import Link from 'next/link';
import React from 'react';

const Material = () => {
  let arr = [
    { title: "All Material", no: "45" },
    { title: "Polity", no: "12" },
    { title: "History", no: "10" },
    { title: "Geography", no: "8" },
    { title: "Economy", no: "9" },
    { title: "Science & Tech", no: "6" },
  ];

  return (
   <Link href='/all-material'>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
      {arr.map((item, i) => (
        <Card5 key={i} title={item.title} no={item.no} />
      ))}
    </div>
   </Link>
  );
};

export default Material;
