import { OpenStreetMapProvider } from "leaflet-geosearch";
import React, { useState } from "react";
import { useMapContext } from "../context/MapContext";

const MeasureDistanceForm = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const {setStartCoords,  setEndCoords } = useMapContext();

  const provider = new OpenStreetMapProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (start && end) {
      const startRes = await provider.search({ query: start });

      const endRes = await provider.search({ query: end });

      if(startRes.length > 0){
        const {x,y} = startRes[0];
        setStartCoords([y,x]);
  
      }

      if(endRes.length > 0){
        const {x,y} = endRes[0];
        setEndCoords([y,x]);
      }


    }
    setStart('');
    setEnd('');
  };

  return (
    <div className="mb-6">
      {/* <h1 className="text-xl font-semibold text-center mb-3">
        Calculate Distance
      </h1> */}
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <input
          type="text"
          placeholder="Start Point"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className=" px-2 py-2 border-2 border-green-500 rounded-md"
        />
        <input
          type="text"
          placeholder="End Point"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className=" px-2 py-2 border-2 border-green-500 rounded-md"
        />
        <button className=" bg-green-500 py-2 px-3 text-white rounded-md">
          {/* Calculate Distance */}
          submit
        </button>
      </form>
    </div>
  );
};

export default MeasureDistanceForm;
