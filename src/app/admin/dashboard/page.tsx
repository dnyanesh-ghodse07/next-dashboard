"use client";
import useScreenSize from "@/hooks/useScreenSize";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="flex-1 bg-white rounded-md">
            <div className="p-4">
              <h2>Total Revenue</h2>
              <h1 className="text-3xl py-4">$46765</h1>
              <p className="text-slate-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, totam.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-1">
            <div className="bg-white p-4 flex-1 rounded-md">
              Monthly Revenue
            </div>
            <div className="bg-white p-4 flex-1 rounded-md">
              Sales statistics
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 bg-white p-4 rounded-md">
            <h1>Best selling products</h1>
            <div>
              {[1, 92, 72, 52, 53, 33, 85, 24, 6, 25].map((item) => (
                <div key={item}>Item 1</div>
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-md bg-white p-4">Recent Orders</div>
        </div>
        <div>
          <div>Product Status(delivered,pending,packaging)</div>
        </div>

        {/* 
          total revenue | monthly revenue
          
            recent orders
            sales
            

            product status
          */}
      </div>
    </>
  );
};

export default Dashboard;
