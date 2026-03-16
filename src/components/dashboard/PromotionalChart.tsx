"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "Social Media", value: 45 },
  { name: "Website", value: 35 },
  { name: "Store", value: 20 }
]

const COLORS = ["#ff7a45", "#3b82f6", "#8b5cf6"]

export default function PromotionalChart() {

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm h-full">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-4">

        <h3 className="font-semibold text-gray-900">
          Promotional Sales
        </h3>

        <select className="border rounded px-2 py-1 bg-gray-100 text-sm text-gray-500">
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>

      </div>


      {/* VISITORS */}

      <p className="text-gray-500 text-sm">
        Visitors
      </p>

      <div className="flex items-center gap-2 mb-6">

        <h2 className="text-2xl text-gray-900 font-bold">
          7,802
        </h2>

        <span className="text-green-500 text-sm font-semibold">
          ↑ 0.56%
        </span>

      </div>


      {/* DONUT CHART */}

      <div className="h-[220px] relative">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              innerRadius={70}
              outerRadius={95}
              paddingAngle={2}
              dataKey="value"
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>


        {/* CENTER TEXT */}

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <p className="text-gray-900  text-sm">
            Website
          </p>

          <p className="font-bold text-gray-900  text-lg">
            1,016
          </p>

          <span className="text-blue-500 text-sm font-semibold">
            ↑ 2.1%
          </span>

        </div>

      </div>


      {/* LEGEND */}

      <div className="flex justify-center gap-6 mt-6 text-sm">

        <div className="flex text-gray-900 items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff7a45]"></span>
          Social Media
        </div>

        <div className="flex text-gray-900 items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#3b82f6]"></span>
          Website
        </div>

        <div className="flex text-gray-900 items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#8b5cf6]"></span>
          Store
        </div>

      </div>

    </div>

  )

}