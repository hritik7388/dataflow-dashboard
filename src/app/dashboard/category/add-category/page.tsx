// src/app/dashboard/category/add-category/page.tsx 
"use client";

import { useState } from "react";

export default function AddProductPage() {



    const [images, setImages] = useState<File[]>([]);



    return (
        <div className="p-6">

            <h1 className="text-2xl text-gray-900 font-bold mb-6">Add Category</h1>




            <div className="bg-white p-6 rounded-xl shadow-sm">

                <div className="space-y-6">


                    {/* CATEGORY */}
                    <div>
                        <p className="font-medium mb-2 text-gray-900">Category <span className="text-orange-500">*</span></p>
                        <input placeholder="Category name " className="bg-gray-100 p-3 text-gray-900 rounded-lg w-full" />

                    </div>

                    {/* IMAGE UPLOAD */}
                    <div className="bg-white p-6 text-gray-900 rounded-xl  ">
                        <p className="mb-3 font-semibold">Upload images</p>

                        {/* DROP AREA */}
                        <label className="border-2 border-dashed border-orange-400 rounded-xl h-[320px] flex flex-col items-center justify-center text-gray-500 cursor-pointer">

                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                            />

                            <div className="flex flex-col items-center gap-5">
                                <div className="text-9xl text-orange-500">☁️</div>
                                <p>
                                    Drop your images here or{" "}
                                    <span className="text-orange-500 underline">click to browse</span>
                                </p>
                            </div>
                        </label>

                        {/* IMAGE PREVIEW */}
                        <div className="flex gap-4 mt-6 flex-wrap">


                            {/* Uploaded Images */}
                            {images.map((file, index) => (
                                <div
                                    key={`upload-${index}`}
                                    className="w-[140px] h-[140px] rounded-xl overflow-hidden border bg-gray-100"
                                >
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt="preview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}

                        </div>


                    </div>


                </div>

            </div>
            <div className="flex gap-4 mt-6">
                <button className="bg-orange-500 text-white px-18 py-1 rounded-lg">
                    Add Category
                </button>

                <button className="border px-18 py-1 rounded-lg bg-gray-100 text-gray-900 hover:bg-orange-500 hover:text-white">
                    Cancel
                </button>
            </div>
        </div>
    );
}