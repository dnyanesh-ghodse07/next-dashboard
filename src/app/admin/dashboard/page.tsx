"use client";
import Card from "@/components/card";
import useScreenSize from "@/hooks/useScreenSize";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </>
  );
};

export default Dashboard;
