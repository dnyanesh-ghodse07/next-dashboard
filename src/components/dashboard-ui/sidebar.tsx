import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { AiOutlineStock, AiOutlineUser } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import SidebarButton from "./sidebar-button";
const SidebarRoute = [
  {
    path: "/dashboard/finance",
    icon: <AiOutlineStock size={20} />,
    label: "Finance",
  },
  {
    path: "/dashboard/users",
    icon: <AiOutlineUser size={20} />,
    label: "Users",
  },
  {
    path: "/dashboard/stock",
    icon: <AiOutlineStock size={20} />,
    label: "Stock",
  },
  {
    path: "/dashboard/analytics",
    icon: <IoAnalytics size={20} />,
    label: "Analytics",
  },
  {
    path: "/dashboard/settings",
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
