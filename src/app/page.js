import Announcement from "@/components/pages/home/Announcement";
import Cardrow from "@/components/pages/home/Cardrow";
import Heading from "@/components/pages/home/Heading";
import Pending from "@/components/pages/home/Pending";
import Profile from "@/components/pages/home/Profile";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Profile/>
        <Heading/>
        <Cardrow/>
        <Pending/>
        <Announcement/>

      </MainLayout>
    </div>
  );
}
