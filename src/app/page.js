import MainLayout from "@/components/templates/MainLayout";
import MainHome from "../components/pages/home/index"

export default function Home() {
  return (
    <div>
      <MainLayout>
        <MainHome />
      </MainLayout>
    </div>
  );
}
