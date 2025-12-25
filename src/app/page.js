import MainHome from "@/components/pages/home/index";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <MainHome />
      </MainLayout>
    </div>
  );
}
