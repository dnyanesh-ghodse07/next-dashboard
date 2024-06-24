import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SidebarButton = ({
  path,
  label,
  icon,
}: {
  path: string;
  label: string;
  icon: ReactNode;
}) => {
  return (
    <Button variant="link">
      <Link href={path} className="flex gap-1 items-center">
        {icon}
        <span>{label}</span>
      </Link>
    </Button>
  );
};

export default SidebarButton;
