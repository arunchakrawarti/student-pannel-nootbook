import Announcement from "@/components/pages/Home/Announcement";
import Cardrow from "@/components/pages/Home/Cardrow";
import Heading from "@/components/pages/Home/Heading";
import Pending from "@/components/pages/Home/Pending";
import Profile from "@/components/pages/Home/Profile";
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
