"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiFilter } from "react-icons/fi";
import marketplace from "../../../../public/db/marketplace.json";
import courses from "../../../../public/db/courses.json";
import liveclasses from "../../../../public/db/liveclasses.json";
import MarketCard from "@/components/molecules/marketCard";

const AllCourses = () => {
  const pathname = usePathname();

  let dataToRender = [];
  let title = "All Courses";

  switch (pathname) {
    case "/marketplace/courses":
      dataToRender = courses;
      title = "Courses";
      break;
    case "/marketplace/live-classes":
      dataToRender = liveclasses;
      title = "Live Classes";
      break;
    case "/marketplace/study-material":
      dataToRender = liveclasses;
      title = "Study Material";
      break;
    case "/marketplace/test-series":
      dataToRender = liveclasses;
      title = "Test Series";
      break;
    default:
      dataToRender = courses;
      title = "Courses";
  }

  return (
    <div id='dummy' className="mt-5 bg-gray-50 min-h-screen">
      <div className="flex gap-4 border-b bg-gray-300 max-w-fit rounded-md  border-gray-200 mb-6">
        {marketplace.data.map((item) => (
          <Link 
            key={item.route}
            href={item.route}
            className={`py-2 px-2 text-sm font-semibold ${
              pathname === item.route
                ? "bg-gray-300"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
          <FiFilter size={18} />
          <span>Filter</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataToRender.map((item, i) => (
          <MarketCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
