import Announcement from "@/components/pages/Home/Announcement";
import Cardrow from "@/components/pages/Home/Cardrow";
import Heading from "@/components/pages/Home/Heading";
import Pending from "@/components/pages/Home/Pending";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <Heading/>
        <Cardrow/>
        <Pending/>
        <Announcement/>
      </MainLayout>
    </div>
  );
}
