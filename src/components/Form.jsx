import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "leaflet-geosearch/dist/geosearch.css";
import React, { useState } from "react";
import { useMapContext } from "../context/MapContext";

const Form = () => {
  const [city, setCity] = useState("");

  const [results, setResults] = useState([]);

  const { setPlaceCoordinates } = useMapContext();
  const provider = new OpenStreetMapProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await provider.search({ query: city });
    console.log(res);

    setResults(res);

    if (results.length > 0) {
      const { x, y } = results[0];
      setPlaceCoordinates([y, x]);
    }
  };

  const handleSelectLocation = (result) => {
    console.log(result);
    if (results.length > 0) {
      const { x, y } = result;
      setPlaceCoordinates([y, x]);
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className=" w-full">
        {/* <div className="flex gap-4 mb-4 items-center border-b-2 border-teal-500 py-2">
          <input
            className="py-2 px-2 border-2 w-full border-green-500 rounded-md"
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div> */}
        
      </form>
      {results.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 z-10">
          {results.map((result) => (
            <li
              key={result.x + result.y}
              onClick={() => handleSelectLocation(result)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {result.label}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default Form;
