import nav from "../../../public/db/nav.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import DashboardLink from "../atom/DashboardLink";
import Image from "next/image";
const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = usePathname();
  const router = useRouter();
  const { navigation } = nav;
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const confirmLogout = () => {
    setShowLogoutModal(true);
  };

  const proceedLogout = () => {
    setShowLogoutModal(false);
    toast.success("Logout successfully");

    Cookies.remove("token");
    router.replace("/auth/signin");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-30 transform bg-[var(--color-accent-blue)] transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 md:w-80 xl:w-80`}
      >
        <nav className="flex h-full flex-col gap-2 py-4 md:gap-7">
          <div className="flex gap-3 px-8 sm:mt-5 md:mt-5">
            <h1 className="bg-white text-[1.4rem] font-bold rounded-full md:text-[2.5rem]">
              <Image
                src="/img/notebook.png"
                height={64}
                width={78}
                alt="logo"
              />
            </h1>

            <h1 className="font-inter text-[24px] font-medium leading-[100%] tracking-[0.09px] align-middle text-white">
              Student’s Dashboard
            </h1>
          </div>

          <ul className="scrollbar-hidden flex h-full w-full flex-col gap-2 overflow-y-scroll px-6 text-lg md:mt-5 sm:mt-7 md:text-xl">
            <div className="flex w-full flex-col gap-2">
              {navigation.map((item, index) => {
                const { route, label, icon, children } = item;
                return (
                  <DashboardLink
                    key={index}
                    active={path === route}
                    route={route}
                    label={label}
                    heroIcon={icon}
                    handleClick={() => setIsSidebarOpen(false)}
                    subMenu={children || []}
                  />
                );
              })}

              {/* <DashboardLink
                route="#"
                label="Log out"
                heroIcon="ri-logout-circle-line"
                handleClick={confirmLogout}
              /> */}
            </div>
          </ul>
        </nav>
      </div>

      {showLogoutModal && (
        <div className="bg-opacity-30 fixed inset-0 z-50 flex items-center justify-center bg-[#00000079]">
          <div className="w-[90%] max-w-sm rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelLogout}
                className="cursor-pointer rounded bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={proceedLogout}
                className="cursor-pointer rounded bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
