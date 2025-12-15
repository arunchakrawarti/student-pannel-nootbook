import React from "react";
import CardPrelims from "../../molecules/CardPrelims";
import CardTest from "@/components/molecules/CardTest";
import mock from "../../../../public/db/mock.json";
import complete from "../../../../public/db/complete.json"

function PrelimsMockTest() {
  return (
    <div className="w-full flex flex-col lg:flex-row mt-5 justify-between gap-5">

     
      <div className="space-y-4 w-full lg:w-1/2">
        {mock.map((test, index) => (
          <CardPrelims
            key={index}
            title={test.title}
            paper={test.paper}
            days={test.days}
            stats={test.stats}
          />
        ))}
      </div>
      <div className="space-y-4 w-full lg:w-1/2">
        {complete.map((test, index) => (
          <CardTest
            key={index}
            title={test.title}
            paper={test.paper}
            completionStatus={test.completionStatus}
            stats={test.stats}
            resultStats={test.resultStats}
          />
        ))}
      </div>

    </div>
  );
}

export default PrelimsMockTest;
