import Mainmarketplace from "@/components/pages/marketplace/Index"
import MainLayout from "@/components/templates/MainLayout"

const page = () => {
  return (
    <div>
      <MainLayout>
        <Mainmarketplace type="live-classes" title="All Courses"/>
      </MainLayout>
    </div>
  )
}

export default page
