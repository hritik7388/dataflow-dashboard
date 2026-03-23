// src/components/attributes/add-attributes/page.tsx
"use client";

import { useState } from "react";

export default function AddAttributesPage() {



    return (
        <div className="p-6 h-[100vh] ">

            <h1 className="text-2xl text-gray-900 font-bold mb-25">Add Attributes</h1>




            <div className="bg-white p-6 rounded-xl shadow-sm">

                <div className="space-y-6">


                    {/* CATEGORY */}
                    <div>
                        <p className="font-medium mb-2 text-gray-900">Attributes name  <span className="text-orange-500">*</span></p>
                        <input placeholder="Attributes name " className="bg-gray-100 p-3 text-gray-900 rounded-lg w-full" />

                    </div>

                    <div>
                        <p className="font-medium mb-2 text-gray-900">Attributes value   <span className="text-orange-500">*</span></p>
                        <input placeholder="Attributes value  " className="bg-gray-100 p-3 text-gray-900 rounded-lg w-full" />

                    </div>



                </div>

            </div>
            <div className="flex gap-4 mt-6">
                <button className="bg-orange-500 text-white px-18 py-1 rounded-lg">
                    Add Attributes
                </button>

                <button className="border px-18 py-1 rounded-lg bg-gray-100 text-gray-900 hover:bg-orange-500 hover:text-white">
                    Cancel
                </button>
            </div>
        </div>
    );
}