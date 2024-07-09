import { getProducts } from "@/actions/getProducts";
import React from "react";
import { Product } from "@/types/types";
import Image from "next/image";

const page = async () => {
  const products: Product[] = await getProducts();
  return (
    <div>
      <h2 className="text-slate-600 py-2">Products</h2>
      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search Products"
          className="p-2 w-2/4 my-2"
        />
        <select name="" id="" className="h-10 w-44 p-2">
          <option value="">A</option>
          <option value="">B</option>
          <option value="">C</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-2">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white shadow-md p-4 rounded-md w-56 h-64 flex flex-col gap-4 items-center"
            >
              <h1>{product.title.substring(0, 20)}</h1>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  style={{
                    width: '70%',
                    height: '70%',
                    objectFit: 'cover'
                  }}
                />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
