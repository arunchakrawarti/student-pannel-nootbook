import CardScore from "@/components/molecules/CardScore";
import React from "react";

const Course = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-10 pb-10  gap-5">
        <CardScore no="4" title="Courses Enrolled" />
        <CardScore no="23" title="Tests Attempted" />
        <CardScore no="42.5" title="Study Hours" />
        <CardScore no="#145" title="Rank" />
      </div>
    </div>
  );
};

export default Course;
