import Mainprofile from "@/components/pages/profile/Index";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <MainLayout>
        <Mainprofile/>
      </MainLayout>
    </div>
  );
};

export default page;
