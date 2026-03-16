"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  { id: "7712309", name: "Neptune Long-sleeve", price: 1452.5, quantity: 1638, sale: 20, stock: "Out of stock", startDate: "08/24/2024" },
  { id: "7712310", name: "Corduroy slim-fit", price: 1452.5, quantity: 1638, sale: 20, stock: "In Stock", startDate: "08/24/2024" },
  // ...more products
];

export default function AllProducts() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(p =>
    p.id.includes(search) || p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-gray-900 text-lg">All Products</h2>
        <Link href="/dashboard/products/add" className="bg-orange-500 text-white px-4 py-2 rounded">
          Add New
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search by Product ID or Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full border p-2 rounded"
      />

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Product ID</th>
              <th className="py-2 px-4 text-center">Price</th>
              <th className="py-2 px-4 text-center">Quantity</th>
              <th className="py-2 px-4 text-center">Sale</th>
              <th className="py-2 px-4 text-center">Stock</th>
              <th className="py-2 px-4 text-center">Start Date</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{p.name}</td>
                <td className="py-2 px-4">{p.id}</td>
                <td className="py-2 px-4 text-center">${p.price.toLocaleString()}</td>
                <td className="py-2 px-4 text-center">{p.quantity}</td>
                <td className="py-2 px-4 text-center">{p.sale}</td>
                <td className="py-2 px-4 text-center">{p.stock}</td>
                <td className="py-2 px-4 text-center">{p.startDate}</td>
                <td className="py-2 px-4 text-center">
                  <Link href={`/dashboard/products/${p.id}`} className="text-blue-500 hover:underline">View</Link>
                  <Link href={`/dashboard/products/edit/${p.id}`} className="ml-2 text-orange-500 hover:underline">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}