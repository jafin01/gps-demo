import React, { useState } from "react";
import { useMapContext } from "../context/MapContext";

const SelectMapLayer = () => {

 const {selectLayer,setSelectLayer} = useMapContext();

  const diiferentMapLayers = [
    {
      name: "Normal View",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    
    },
   
    // {
    //   name: "Google Street View",
    //   url: "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
    //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    // },
    // {
    //   name: "Google Satellite View",
    //   url: "http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}",
    //   subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    // },
  ];

  const handleOptionChange = (event) => {
    const selectedLayer = JSON.parse(event.target.value); 
      setSelectLayer({
        name: selectedLayer.name,
        url: selectedLayer.url,
        subdomains: selectedLayer.subdomains
      })

  };


 

  return (
    <div className="px-4 w-80">
      <label className="flex flex-col items-start border rounded px-2 py-1">
        {diiferentMapLayers.map((data , i) => {
          return (
            <div key={i}>
              {/* <input
                 type="radio"
                 className="form-radio"
                 value={JSON.stringify(data)}
                 checked={JSON.stringify(selectLayer) === JSON.stringify(data)}
                 onChange={handleOptionChange}
              />
              <span className="ml-2">{data.name}</span> */}
            </div>
          );
        })}
      </label>
    </div>
  );
};

export default SelectMapLayer;
