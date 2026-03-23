// src/components/attributes/page.tsx
"use client";

import { useState } from "react";
import { FiEdit3, FiSearch } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { PiTrash } from "react-icons/pi";

type Product = {
  category: string;
  value: string;
};

export default function AttributesPage() {
  const products: Product[] = [
    { category: "Color", value: "blue, green, white" },
    { category: "Size", value: "S, M, L, XL, XXL"  },
    { category: "Material", value: "Cotton, Polyster"  },
    { category: "Style Long-sleeve", value: "Cotton, Polyster" },
    { category: "Meat Type", value: "Fresh, Frozen, Marinated" },
    { category: "Weight", value: "1kg, 2kg, 3kg, over 5kg" },
    { category: "Packaging", value: "Plastic box, paper, nylon, tin cans" },
    { category: "Kind of food", value: "Dried food, wet food, supplementary food" },
    { category: "Milk", value: "Formula milk, fresh milk" },
    { category: "Combo", value: "Cat food, dog food" },
  ];

  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(products.length / pageSize);

  return (
    <div className="p-2 md:p-4 lg:p-6 bg-[#f5f6fa] min-h-screen">
      {/* HEADER */}
      <div className="mb-6 md:mb-10">
        <h1 className="text-[20px] md:text-[22px] font-semibold text-gray-800">
          All Category
        </h1>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm">
        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-5">
          {/* LEFT */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
              Showing
              <select className="bg-[#f5f6fa] px-2 py-1.5 rounded-md text-gray-900">
                <option>10</option>
              </select>
              entries
            </div>

            <div className="relative w-full sm:w-[260px] md:w-[320px]">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700" />
              <input
                placeholder="Search here..."
                className="bg-[#f5f6fa] pl-10 pr-4 py-2.5 rounded-xl w-full text-sm outline-none"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 md:gap-3 w-full lg:w-auto">
            <select className="bg-[#f5f6fa] px-3 md:px-5 py-2 rounded-xl text-sm text-gray-600">
              <option>All Categories</option>
            </select>

            <select className="bg-[#f5f6fa] px-3 md:px-5 py-2 rounded-xl text-sm text-gray-600">
              <option>All Status</option>
            </select>

            <select className="bg-[#f5f6fa] px-3 md:px-5 py-2 rounded-xl text-sm text-gray-600">
              <option>Sort by (Default)</option>
            </select>

            <button className="bg-orange-500 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-sm hover:bg-orange-600 transition whitespace-nowrap">
              + Add new
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          {/* HEADER */}
          <div className="min-w-[700px] grid grid-cols-[3fr_3fr_1fr] px-4 py-3 text-[12px] text-gray-900 font-semibold uppercase bg-[#f8f9fb] rounded-xl">
            <div>Category</div>
            <div>Value</div>
            <div>Action</div>
          </div>

          {/* ROWS */}
          <div className="min-w-[700px]">
            {products
              .slice((page - 1) * pageSize, page * pageSize)
              .map((p, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[3fr_3fr_1fr] px-4 py-4 items-center rounded-xl text-sm text-gray-700 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#f8f9fb]"
                  } hover:bg-orange-50`}
                >
                  {/* CATEGORY */}
                  <div className="flex items-center gap-3 md:gap-4">
                    
                    <div className="font-medium text-xs md:text-sm">
                      {p.category}
                    </div>
                  </div>

                  {/* VALUE */}
                  <div className="text-gray-900 text-xs md:text-sm">
                    {p.value}
                  </div>

                  {/* ACTION */}
                  <div className="flex items-center gap-3 md:gap-5 text-lg">
                    <IoEyeOutline className="text-orange-500 cursor-pointer" />
                    <FiEdit3 className="text-green-500 cursor-pointer" />
                    <PiTrash className="text-red-500 cursor-pointer" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* PAGINATION */}
        <div className="flex items-center justify-between mt-6 text-sm text-gray-900">
          <p>
            Showing {(page - 1) * pageSize + 1}–
            {Math.min(page * pageSize, products.length)} of{" "}
            {products.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
            >
              ‹
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const pageNumber = i + 1;

              return (
                <button
                  key={i}
                  onClick={() => setPage(pageNumber)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-sm ${
                    page === pageNumber
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 disabled:opacity-40"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}