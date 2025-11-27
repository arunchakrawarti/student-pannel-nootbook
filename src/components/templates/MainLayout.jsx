// "use client";
// import { useState } from "react";
// import SideBar from "../organisms/SideBar";
// import Header from "../organisms/Header";


// export default function MainLayout({ children, pageTitle }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen">
//       <SideBar
//         isSidebarOpen={isSidebarOpen}
//         setIsSidebarOpen={setIsSidebarOpen}
//       />

//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 z-20 bg-black opacity-50 backdrop-blur-[2px] md:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         ></div>
//       )}

//       <div className="flex flex-1 flex-col">
//         {/* <Header
//           pageTitle={pageTitle}
//           isSidebarOpen={isSidebarOpen}
//           setIsSidebarOpen={setIsSidebarOpen}
//         /> */}

//         <main className="max-w-[100vw] flex-1 overflow-y-auto py-8 md:px-10 px-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import SideBar from "../organisms/SideBar";

export default function MainLayout({ children, pageTitle }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative">

      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-1 left-4 z-30 bg-white p-2 rounded shadow"
        >
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m0 6H4"
            />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <SideBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

     
      <div className="flex flex-1 flex-col">
        <main className="max-w-[100vw] flex-1 overflow-y-auto py-8 md:px-10 px-6">
          {children}
        </main>
      </div>
    </div>
  );
}
