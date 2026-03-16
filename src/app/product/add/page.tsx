"use client";

import { useState } from "react";

export default function AddProduct() {
  const [product, setProduct] = useState({ name: "", price: "", quantity: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product);
    alert("Product Added!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="font-semibold text-gray-900 text-lg mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Name" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} className="border p-2 rounded"/>
        <input type="number" placeholder="Price" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className="border p-2 rounded"/>
        <input type="number" placeholder="Quantity" value={product.quantity} onChange={(e) => setProduct({...product, quantity: e.target.value})} className="border p-2 rounded"/>
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Add Product</button>
      </form>
    </div>
  );
}