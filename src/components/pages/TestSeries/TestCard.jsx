import Card9 from "@/components/molecules/Card9";
import React from "react";
import test from "../../../../public/db/test.json";

const TestCard = () => {
  return (
    <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {test.map((item, i) => {
        return (
          <Card9
            img={item.img}
            title={item.title}
            description={item.description}
            color={item.color}
          />
        );
      })}
    </div>
  );
};

export default TestCard;
