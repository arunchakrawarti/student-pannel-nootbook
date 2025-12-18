import React from "react";
import card from "../../../../public/db/card.json";
import Card9 from "@/components/molecules/Card9";

const Cardrow = () => {
  return (

  <div className="grid grid-cols-1 mt-4  md:grud-cols-2 lg:grid-cols-3 gap-4">
      {card.map((item) => (
        <Card9
          key={item.id}
          iconSrc={item.iconSrc}
          value={item.value}
          label={item.label}
          changeText={item.changeText}
          layout={item.layout}
          colorClass={item.colorClass}
        />
      ))}
    </div>
  );
};

export default Cardrow;
