// src/app/dashboard/products/productDetails/page.tsx
"use client";

import { useState } from "react";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  );

  const images = [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl font-bold mb-6">Add Product</h1>

      <div className="bg-white p-6 rounded-xl shadow-sm grid grid-cols-2 gap-10">

        {/* LEFT SIDE IMAGES */}
        <div className="flex gap-4">

          {/* THUMBNAILS */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-[70px] h-[70px] object-cover rounded-lg cursor-pointer border ${
                  selectedImage === img ? "border-black" : ""
                }`}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex-1">
            <img
              src={selectedImage}
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </div>

        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="space-y-4">

          <p className="text-gray-400 uppercase text-sm">Clothing</p>

          <h2 className="text-3xl font-bold">Stretch strap top</h2>

          {/* RATING */}
          <div className="flex items-center gap-2 text-sm">
            <span>★★★★★</span>
            <span className="text-gray-500">(134 reviews)</span>
            <span className="text-orange-500">⚡ 18 sold in last 32 hours</span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">$79.99</span>
            <span className="line-through text-gray-400">$98.99</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
              -25%
            </span>
          </div>

          <p className="text-gray-500 text-sm">
            The garments labelled as Committed are products that have been produced
            using sustainable fibres or processes, reducing their environmental impact.
          </p>

          <p className="text-sm text-gray-500">
            👁 28 people are viewing this right now
          </p>

          <hr />

          {/* TIMER */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Hurry Up!</p>
              <p className="text-sm text-gray-500">Offer Ends in:</p>
            </div>

            <div className="flex gap-4 text-center">
              <div><p className="font-bold">7</p><p className="text-xs">Days</p></div>
              <div><p className="font-bold">00</p><p className="text-xs">Hours</p></div>
              <div><p className="font-bold">44</p><p className="text-xs">Mins</p></div>
              <div><p className="font-bold">29</p><p className="text-xs">Secs</p></div>
            </div>
          </div>

          {/* PROGRESS */}
          <div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[84%]"></div>
            </div>
            <p className="text-sm mt-2">
              <span className="font-semibold">84% Sold</span> – Only 24 item(s) left in stock!
            </p>
          </div>

          <hr />

          {/* COLORS */}
          <div>
            <p className="mb-2">Colors: <span className="font-medium">Gray</span></p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-black"></div>
              <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* SIZE */}
          <div>
            <p className="mb-2">Size: <span className="font-medium">L</span></p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-lg">S</button>
              <button className="px-4 py-2 border rounded-lg">M</button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">L</button>
              <button className="px-4 py-2 border rounded-lg">XL</button>
              <button className="px-4 py-2 border rounded-lg">XXL</button>
            </div>
          </div>

          {/* QUANTITY */}
          <div>
            <p className="mb-2">Quantity:</p>
            <div className="flex items-center gap-4 border rounded-lg w-fit px-4 py-2">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}