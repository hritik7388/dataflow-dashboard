"use client";

export default function OrderDetailsPage() {
  return (
    <div className="bg-[#f5f6fa] min-h-screen p-4 md:p-6">

      {/* HEADER */}
      <h1 className="text-[18px] md:text-[20px] font-medium text-gray-800 mb-5">
        Order #123783
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">

        {/* LEFT SECTION */}
        <div className="space-y-5">

          {/* ITEMS CARD */}
          <div className="bg-white rounded-xl p-4 shadow-sm">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[14px] font-medium text-gray-700">
                All item
              </h2>
              <span className="text-[12px] text-gray-400">Sort ▼</span>
            </div>

            {/* TABLE HEADER */}
            <div className="grid grid-cols-[2fr_1fr_1fr] text-[11px] text-gray-400 mb-2 px-1">
              <span>Product</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Price</span>
            </div>

            {/* ITEMS */}
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-[2fr_1fr_1fr] items-center bg-[#f7f8fb] p-3 rounded-lg mb-2"
              >
                {/* PRODUCT */}
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/40?img=${i + 1}`}
                    className="w-9 h-9 rounded-md object-cover"
                    alt="product"
                  />

                  <div>
                    <p className="text-[11px] text-gray-400">
                      Product name
                    </p>
                    <p className="text-[13px] font-medium text-gray-800">
                      {i === 0
                        ? "Kristin Watson"
                        : i === 1
                        ? "V-neck linen T-shirt"
                        : "Ribbed modal T-shirt"}
                    </p>
                  </div>
                </div>

                {/* QUANTITY */}
                <div className="text-center text-[13px] text-gray-700">
                  1
                </div>

                {/* PRICE */}
                <div className="text-center text-[13px] font-medium text-gray-800">
                  $50.47
                </div>
              </div>
            ))}
          </div>

          {/* CART TOTALS */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-[14px] font-medium text-gray-700 mb-4">
              Cart Totals
            </h2>

            <div className="text-[13px] space-y-3">

              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-400">Subtotal:</span>
                <span className="text-gray-700">$70.13</span>
              </div>

              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-400">Shipping:</span>
                <span className="text-gray-700">$10.00</span>
              </div>

              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-400">Tax (GST):</span>
                <span className="text-gray-700">$5.00</span>
              </div>

              <div className="flex justify-between pt-2">
                <span className="text-gray-700 font-medium">
                  Total price:
                </span>
                <span className="text-orange-500 font-semibold">
                  $90.58
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-5">

          {/* SUMMARY */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-[14px] font-medium text-gray-700 mb-3">
              Summary
            </h3>

            <div className="space-y-2 text-[13px] text-gray-600">
              <p>
                Order ID:{" "}
                <span className="font-medium text-gray-800">
                  #192847
                </span>
              </p>
              <p>Date: 20 Nov 2023</p>
              <p>
                Total:{" "}
                <span className="text-orange-500 font-semibold">
                  $948.5
                </span>
              </p>
            </div>
          </div>

          {/* SHIPPING */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-[14px] font-medium text-gray-700 mb-3">
              Shipping Address
            </h3>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              3517 W. Gray St. <br />
              Utica, Pennsylvania 57867
            </p>
          </div>

          {/* PAYMENT */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-[14px] font-medium text-gray-700 mb-3">
              Payment Method
            </h3>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              Pay on Delivery (Cash/Card). Cash on delivery (COD)
              available. Card/Net banking acceptance subject to device
              availability.
            </p>
          </div>

          {/* DELIVERY */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-[14px] font-medium text-gray-700 mb-3">
              Expected Date Of Delivery
            </h3>

            <p className="text-orange-500 text-[13px] font-medium mb-3">
              20 Nov 2023
            </p>

            <button className="w-full bg-gray-100 text-gray-900 hover:bg-orange-600 hover:text-white text-[13px] py-2.5 rounded-lg font-medium transition">
              🚚 Track order
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}