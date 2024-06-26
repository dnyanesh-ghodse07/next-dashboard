'use client';

import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";


const SidebarButton = ({
  path,
  label,
  icon,
}: {
  path: string;
  label: string;
  icon: ReactNode;
}) => {
  const pathname = usePathname()
  const isActive = pathname === path;

  return (
    <Button variant={`${isActive ? 'default': 'secondary'}`} className="sm:w-full flex justify-start">
      <Link href={path} className="flex gap-1 items-center">
        {icon}
        <span className="hidden sm:block">{label}</span>
      </Link>
    </Button>
  );
};

export default SidebarButton;
