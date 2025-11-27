import React from "react";
import Card7 from "../../molecules/Card7";
import carddata from "../../../../public/db/carddata.json";

const Total = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mt-4 bg-white">
      {carddata.map((card) => (
        <Card7
          key={card.id}
          img={card.imgSrc}
          title={card.title}
          no={card.no}
          iconColor={card.iconColor}
        />
      ))}
    </div>
  );
};

export default Total;
