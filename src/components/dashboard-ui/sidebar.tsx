import React from "react";
import { Button } from "../ui/button";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import SidebarButton from "./sidebar-button";
const SidebarRoute = [
  {
    path: "/admin/dashboard",
    icon: <AiOutlineHome size={20} />,
    label: "Dashboard",
  },
  {
    path: "/admin/orders",
    icon: <MdOutlineShoppingCart size={20} />,
    label: "Orders",
  },
  {
    path: "/admin/products",
    icon: <AiOutlineProduct size={20} />,
    label: "Products",
  },
  {
    path: "/admin/customers",
    icon: <IoPeopleOutline size={20} />,
    label: "Customers",
  },
  {
    path: "/admin/analytics",
    icon: <FaRegChartBar size={20} />,
    label: "Analytics",
  },
  {
    path: "/admin/marketing",
    icon: <GrAnnounce size={20} />,
    label: "Marketing",
  },
  {
    path: "/admin/reports",
    icon: <HiOutlineDocumentReport size={20} />,
    label: "Reports",
  },
  {
    path: "/admin/settings",
    icon: <CiSettings size={20} />,
    label: "Settings",
  },
];
const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-full min-w-44">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-xl p-2 text-red-500">Dashboard</h1>
          {SidebarRoute.map((route) => {
            return (
              <SidebarButton
                key={route.label}
                label={route.label}
                path={route.path}
                icon={route.icon}
              />
            );
          })}
        </div>
        <div>
          <Button variant="destructive" size="sm">
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
