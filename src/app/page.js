import AnnouncementList from "@/components/pages/home/AnnouncementList";
import DashboardStats from "@/components/pages/home/DashboardStats";
import TestOverview from "@/components/pages/home/TestOverview";
import Profile from "@/components/pages/home/Profile";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Profile/>
        <DashboardStats/>
        <TestOverview/>
        <AnnouncementList/>

      </MainLayout>
    </div>
  );
}
