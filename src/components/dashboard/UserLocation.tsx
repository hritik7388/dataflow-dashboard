"use client";

import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
"https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states.json";

export default function UserLocation() {

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm h-full">

      {/* HEADER */}

      <h3 className="font-semibold mb-6 text-gray-900">
        User Location
      </h3>


      {/* MAP */}

      <div className="w-full h-[260px]">

        <ComposableMap
          projection="geoAlbersUsa"
          width={800}
          height={400}
          style={{ width: "100%", height: "100%" }}
        >

          <Geographies geography={geoUrl}>

            {({ geographies }) =>
              geographies.map((geo) => (

                <Geography
                  key={geo.rsmKey}
                  geography={geo}

                  style={{
                    default: {
                      fill: "#e5e7eb",
                      stroke: "#ffffff",
                      strokeWidth: 0.5,
                      outline: "none"
                    },
                    hover: {
                      fill: "#ff7a45",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#ff7a45",
                      outline: "none"
                    }
                  }}

                />

              ))
            }

          </Geographies>

        </ComposableMap>

      </div>

    </div>

  );

}