import React from "react";

import mock from "../../../../public/db/mock.json";
import ExamCard from "@/components/molecules/ExamCard";


function PrelimsMockTest() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-8 gap-5">
      {mock.map((test, index) => (
        <ExamCard
          key={index}
          title={test.title}
          paper={test.paper}
          status={test.status}
          type={test.type}
          tagText={test.tagText}
          tagColor={test.tagColor}
          stats={test.stats}
          resultStats={test.resultStats}
        />
      ))}
    </div>
  );
}

export default PrelimsMockTest;
