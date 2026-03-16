"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const products = [
  { id: "7712309", name: "Neptune Long-sleeve", price: 1452.5, quantity: 1638 },
  { id: "7712310", name: "Corduroy slim-fit", price: 1452.5, quantity: 1638 },
];

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: "", price: "", quantity: "" });

  useEffect(() => {
    const p = products.find(p => p.id === id);
    if (p) setProduct(p);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated:", product);
    alert("Product Updated!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="font-semibold text-gray-900 text-lg mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input type="text" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} className="border p-2 rounded"/>
        <input type="number" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} className="border p-2 rounded"/>
        <input type="number" value={product.quantity} onChange={(e) => setProduct({...product, quantity: e.target.value})} className="border p-2 rounded"/>
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Update Product</button>
      </form>
    </div>
  );
}