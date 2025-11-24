import React from "react";
import Card from "../../molecules/Card";
import card from "../../../../public/db/card.json";

const Cardrow = () => {
  return (
    <div className="grid mt-3 grid-cols-1 md:grid-cols-3 gap-4">
      {card.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          percent={item.percent}
          value={item.value}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Cardrow;
