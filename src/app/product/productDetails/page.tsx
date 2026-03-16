"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const products = [
  { id: "7712309", name: "Neptune Long-sleeve", price: 1452.5, quantity: 1638, sale: 20, stock: "Out of stock", startDate: "08/24/2024" },
  { id: "7712310", name: "Corduroy slim-fit", price: 1452.5, quantity: 1638, sale: 20, stock: "In Stock", startDate: "08/24/2024" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const p = products.find(p => p.id === id);
    setProduct(p || null);
  }, [id]);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{product.name}</h2>
      <ul className="text-gray-700 space-y-2">
        <li><strong>Product ID:</strong> {product.id}</li>
        <li><strong>Price:</strong> ${product.price.toLocaleString()}</li>
        <li><strong>Quantity:</strong> {product.quantity}</li>
        <li><strong>Sale:</strong> {product.sale}</li>
        <li><strong>Stock:</strong> {product.stock}</li>
        <li><strong>Start Date:</strong> {product.startDate}</li>
      </ul>
    </div>
  );
}