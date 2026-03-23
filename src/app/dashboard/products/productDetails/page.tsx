// src/app/dashboard/products/productDetails/page.tsx
"use client";

import { useState, useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { TbExchange } from "react-icons/tb";



export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState("description");

  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  );
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 79.99;
    const duration = 2500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setPrice(parseFloat(start.toFixed(2)));
    }, 16);

    return () => clearInterval(counter);
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 44,
    seconds: 29,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              if (days > 0) {
                days--;
                hours = 23;
                minutes = 59;
                seconds = 59;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const totalStars = 5;
  const [filledStars, setFilledStars] = useState(0);

  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setFilledStars(i);
      i++;
      if (i > totalStars) clearInterval(interval);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const [progress, setProgress] = useState(0);


  useEffect(() => {
    let current = 0;
    const target = 84; // 84%
    const interval = setInterval(() => {
      current += 1;
      if (current > target) {
        current = target;
        clearInterval(interval);
      }
      setProgress(current);
    }, 15); // speed, lower = faster
    return () => clearInterval(interval);
  }, []);


  const images = [
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">

      <h1 className="text-xl md:text-2xl text-gray-900 font-bold mb-6">Add Product</h1>

      {/* ✅ ONLY CHANGE: grid-cols-5 */}
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">

        {/* LEFT SIDE (STICKY IMAGES) */}
        {/* ✅ ONLY CHANGE: col-span-2 */}
        <div className="lg:col-span-2 flex flex-col md:flex-row gap-4 lg:sticky top-6 h-fit">

          {/* THUMBNAILS */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-[90px] h-[120px] object-cover rounded-lg cursor-pointer border ${selectedImage === img ? "border-black" : ""
                  }`}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex-1">
            <img
              src={selectedImage}
              className="w-[750px] h-[750px] object-cover rounded-xl"
            />
          </div>

        </div>

        {/* RIGHT SIDE (SCROLLABLE) */}
        {/* ✅ ONLY CHANGE: col-span-3 */}
        <div className="lg:col-span-3 space-y-6 overflow-y-auto pr-0 md:pr-3">

          <p className="text-gray-400 uppercase text-gray-900  text-sm">Clothing</p>

          <h2 className="text-2xl md:text-3xl text-gray-900 font-bold">Stretch strap top</h2>

          {/* RATING */}
          <div className="flex flex-wrap  items-center gap-2 text-sm">

            <div className="flex items-center gap-2 text-sm">
              <div className="flex text-xl">
                {[...Array(totalStars)].map((_, idx) => (
                  <span
                    key={idx}
                    className={`transition-colors transform duration-300 ${idx < filledStars ? "text-orange-500 scale-125" : "text-gray-300 scale-100"
                      }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-900">(134 reviews)</span>
              <span className="text-orange-900">⚡ 18 sold in last 32 hours</span>
            </div>

          </div>

          {/* PRICE */}
          <div className="flex flex-wrap  items-center gap-3">
            <span className="text-xl md:text-2xl text-gray-900 font-bold animate-pulse hover:scale-105 transition-transform duration-300 inline-block">
              ${price}
            </span>
            <span className="line-through text-gray-900">$98.99</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded text-gray-900 ">
              -25%
            </span>
          </div>

          <p className="text-gray-900 text-sm">
            The garments labelled as Committed are products that have been produced
            using sustainable fibres or processes, reducing their environmental impact.
          </p>

          <p className="text-sm text-gray-900">
            👁 28 people are viewing this right now
          </p>

          <hr />

          {/* TIMER */}
          {/* ✅ ANIMATED TIMER */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 text-gray-900">
            <div>
              <p className="font-semibold text-gray-900">Hurry Up!</p>
              <p className="text-sm text-gray-900">Offer Ends in:</p>
            </div>

          <div className="flex gap-4 text-center">
              {["days", "hours", "minutes", "seconds"].map((k) => (
                <div key={k}>
                  <p className="font-bold">
                    {String(timeLeft[k as keyof typeof timeLeft]).padStart(2, "0")}
                  </p>
                  <p className="text-xs capitalize">{k}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PROGRESS */}
          <div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2">
              <span className="font-semibold text-gray-900">{progress}% Sold</span>
              <span className="text-gray-900"> - Only 24 item(s) left in stock!</span>
            </p>
          </div>

          <hr />

          {/* COLORS */}
          <div>
            <p className="mb-2 text-gray-900 ">Colors: <span className="font-medium text-gray-900 ">Gray</span></p>
            <div className="flex flex-wrap  gap-3">
         {["orange-500","gray-400","purple-400","black","red-400","green-400"].map((c,i)=>(
                <div key={i} className={`w-8 h-8 bg-${c} rounded-full`}/>
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div>
            <p className="mb-2 text-gray-900 ">Size: <span className="font-medium text-gray-900 ">L</span></p>
            <div className="flex flex-wrap gap-2 text-gray-900">
              {["S","M","L","XL","XXL"].map((s)=>(
                <button
                  key={s}
                  className={`px-4 py-2 border rounded-lg ${
                    s==="L" ? "bg-orange-500 text-white" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div>
            <p className="mb-2 text-gray-900 ">Quantity:</p>
            <div className="flex  gap-15 border rounded-lg w-fit px-5 py-3">
              <button className="text-gray-900 ">-</button>
              <span className="text-gray-900 ">1</span>
              <button className="text-gray-900 ">+</button>
            </div>
          </div>

          <hr />

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-4">

            {/* ADD TO CART */}
            <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold border hover:bg-white hover:text-black">
              ADD TO CART - $79.99
            </button>

            {/* 🔗 Share */}
            <div className="flex gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer hover:border-orange-500 transition">
              <TbExchange className="text-xl text-blue-700" />
            </div>
            {/* ❤️ Wishlist */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer hover:border-orange-500 transition">
              <BsHeart className="text-xl text-red-900 hover:border-red-500 transition " />
            </div>
            </div>


          </div>

          <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold">
            BUY IT NOW
          </button>

          {/* PRODUCT INFO */}
          <div className="text-sm text-gray-900 space-y-1">
            <p><strong>SKU:</strong> 53453412</p>
            <p><strong>Vendor:</strong> Dataflow</p>
            <p><strong>Available:</strong> Instock</p>
            <p><strong>Categories:</strong> Clothes, women, T-shirt</p>
          </div>

          {/* PAYMENT */}
          <div className="flex items-center justify-between gap-1 flex-wrap">
            <p className="font-medium whitespace-nowrap text-gray-900">
              Guaranteed safe checkout:
            </p>

            <div className="flex gap-3 items-center flex-wrap">

              <img
                src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png"
                alt="Visa"
                className="h-6 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-6 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                alt="Amex"
                className="h-6 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-6 object-contain"
              />

              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-payment-icon-svg-download-png-51330.png?f=webp&w=256"
                alt="Discover"
                className="h-10 object-contain"
              />

            </div>
          </div>




        </div>
        {/* ================= TABS SECTION ================= */}





      </div>
      <div className="flex-row  bg-white rounded-xl p-6 md:p-10 p-30 shadow-sm">

        {/* TAB HEADINGS */}
       <div className="flex flex-wrap gap-6 md:gap-10 justify-center text-sm md:text-xl font-semibold text-gray-600">
          {[
            { key: "description", label: "Description" },
            { key: "reviews", label: "Customer Reviews" },
            { key: "shipping", label: "Shipping & Returns" },
            { key: "returns", label: "Return Policies" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative pb-2 ${
                activeTab === tab.key ? "text-black" : ""
              }`}
            >
              {tab.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all ${
                  activeTab === tab.key ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="mt-6 md:mt-10 border border-gray-200 rounded-lg p-4 md:p-10 text-sm md:text-base text-gray-600">

          {/* DESCRIPTION */}
          {activeTab === "description" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

              {/* LEFT */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Stretch strap top
                </h3>
                <p className="mb-4 text-gray-700 ">
                  Nodding to retro styles, this Hyperbola T-shirt is defined by its
                  off-the-shoulder design. It's spun from a green stretch cotton
                  jersey and adorned with an embroidered AC logo on the front, a
                  brand's signature.
                </p>

                <p>
                  Thick knitted fabric. Short design. Straight design. Rounded neck.
                  Sleeveless. Straps. Unclosed. Cable knit finish. Co-ord.
                </p>
              </div>

              {/* RIGHT */}
              <div>
                <h3 className="flex flex-wrap gap-4 md:gap-7 mt-4 text-xl text-gray-700">
                  Composition, origin and care guidelines
                </h3>

                <ul className="space-y-2 list-disc ml-4">
                  <li>Composition: 55% polyester, 30% acrylic, 13% polyamide, 2% elastane</li>
                  <li>Designed in Barcelona</li>
                  <li>Origin</li>
                  <li>Manufacture: USA</li>
                </ul>

                {/* ICONS */}
                <div className="flex flex-row md:flex gap-7 mt-4 text-xl text-gray-700">
                  <span>🧺</span>
                  <span>🚫</span>
                  <span>🧼</span>
                  <span>❌</span>
                </div>

                <p className="mt-3 text-xs text-gray-500">
                  MACHINE WASHING MAX 30°C / 85°F SHORT SPIN DRY
                </p>
              </div>

            </div>
          )}

          {/* REVIEWS */}
          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="space-y-10">

              {/* TOP SUMMARY */}
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-10 py-2">

                {/* LEFT RATING */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                  <div>
                    <h2 className="text-6xl font-bold text-black">4.9</h2>
                <div className="text-orange-500 text-lg">
  {"★".repeat(filledStars)}
  {"☆".repeat(5 - filledStars)}
</div>
                    <p className="text-sm text-gray-500">(168 Ratings)</p>
                  </div>

                  {/* PROGRESS BARS */}
                  <div className="space-y-2 w-[300px]">
                    {[
                      { star: 5, value: 59 },
                      { star: 4, value: 46 },
                      { star: 3, value: 0 },
                      { star: 2, value: 0 },
                      { star: 1, value: 0 },
                    ].map((item) => (
                      <div key={item.star} className="flex items-center gap-2 text-sm">
                        <span className="w-6">{item.star}★</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded">
                          <div
                            className="h-2 bg-orange-500 rounded"
                            style={{
                              width: `${(item.value / 59) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="w-6 text-right text-gray-600">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WRITE REVIEW BUTTON */}
                <button className="border border-orange-500 text-orange-500 px-2 py-2 h-[50px] rounded-lg hover:bg-orange-500 hover:text-white transition">
                  Write a review
                </button>
              </div>

              {/* COMMENTS */}
              <div className="space-y-8">

                <h3 className="text-lg font-semibold text-black">03 Comments</h3>

                {/* COMMENT ITEM */}
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex gap-4 md:gap-4">

                    {/* AVATAR */}
                    <div className="w-10 h-10 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      👤
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 space-y-2">

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="font-semibold text-black text-sm md:text-base">
                          Superb quality apparel that exceeds expectations
                        </h4>
                        <span className="text-xs md:text-sm text-gray-500">1 days ago</span>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        Great theme – we were looking for a theme with lots of built in
                        features and flexibility and this was perfect. We expected to need
                        to employ a developer to add a few finishing touches. But we
                        actually managed to do everything ourselves.
                      </p>

                      {/* REPLY */}
                      {i === 0 && (
                        <div className="flex gap-3 mt-4 pl-4 md:pl-6 border-l">

                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            👤
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-black">
                              Reply from Dataflow
                            </p>
                            <p className="text-xs text-gray-500 mb-1">1 days ago</p>
                            <p className="text-sm text-gray-600">
                              We love to hear it! Thank you for this fantastic review!
                            </p>
                          </div>

                        </div>
                      )}

                    </div>
                  </div>
                ))}

              </div>
            </div>
          )}

          {/* SHIPPING */}
          {/* SHIPPING */}
          {activeTab === "shipping" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 text-sm text-gray-700">

              {/* COLUMN 1 */}
              <div className="space-y-3">
                <h3 className="font-semibold text-black">We’ve got your back</h3>
                <p>
                  One delivery fee to most locations (check our Orders & Delivery page)
                </p>
                <p>
                  Free returns within 14 days (excludes final sale and made-to-order
                  items, face masks and certain products containing hazardous or
                  flammable materials, such as fragrances and aerosols)
                </p>
              </div>

              {/* COLUMN 2 */}
              <div className="space-y-3">
                <h3 className="font-semibold text-black">Import duties information</h3>
                <p>
                  Let us handle the legwork. Delivery duties are included in the item
                  price when shipping to all EU countries (excluding the Canary Islands),
                  plus The United Kingdom, USA, Canada, China Mainland, Australia, New
                  Zealand, Puerto Rico, Switzerland, Singapore, Republic Of Korea,
                  Kuwait, Mexico, Qatar, India, Norway, Saudi Arabia, Taiwan Region,
                  Thailand, U.A.E., Japan, Brazil, Isle of Man, San Marino, Colombia,
                  Chile, Argentina, Egypt, Lebanon, Hong Kong SAR, Bahrain and Turkey.
                </p>
                <p>
                  All import duties are included in your order – the price you see is the
                  price you pay.
                </p>
              </div>

              {/* COLUMN 3 */}
              <div className="space-y-3">
                <h3 className="font-semibold text-black">Estimated delivery</h3>
                <p>Express: May 10 – May 17</p>
                <p className="text-gray-500">Sending from USA</p>
              </div>

              {/* COLUMN 4 */}
              <div className="space-y-3">
                <h3 className="font-semibold text-black">Need more information?</h3>

                <div className="flex flex-col gap-1 underline cursor-pointer">
                  <span>Orders & delivery</span>
                  <span>Returns & refunds</span>
                  <span>Duties & taxes</span>
                </div>
              </div>

            </div>
          )}

          {/* RETURNS */}
          {/* RETURNS */}
          {activeTab === "returns" && (
            <div className="max-w-4xl text-sm text-gray-700 space-y-6">

              {/* TITLE */}
              <div>
                <h3 className="font-semibold text-black mb-2">Return Policies</h3>
                <p>
                  At Modave, we stand behind the quality of our products. If you're not
                  completely satisfied with your purchase, we offer hassle-free returns
                  within 30 days of delivery.
                </p>
              </div>

              {/* EXCHANGE / REFUND */}
              <div>
                <h4 className="font-semibold text-black mb-2">
                  Easy Exchanges or Refunds
                </h4>
                <ul className="list-disc ml-5 space-y-2">
                  <li>
                    Exchange your item for a different size, color, or style, or receive a
                    full refund.
                  </li>
                  <li>
                    All returned items must be unworn, in their original packaging, and
                    with tags attached.
                  </li>
                </ul>
              </div>

              {/* PROCESS */}
              <div>
                <h4 className="font-semibold text-black mb-5">Simple Process</h4>
                <ul className="space-y-2">
                  <li>
                    Initiate your return online or contact our customer service team for
                    assistance.
                  </li>
                  <li>
                    Pack your item securely and include the original packing slip.
                  </li>
                  <li>
                    Ship your return back to us using our prepaid shipping label.
                  </li>
                  <li>
                    Once received, your refund will be processed promptly.
                  </li>
                </ul>
              </div>

              {/* FOOT NOTE */}
              <p>
                For any questions or concerns regarding returns, don't hesitate to reach
                out to our dedicated customer service team. Your satisfaction is our
                priority.
              </p>

            </div>
          )}

        </div>
      </div>



    </div>






  );
} 