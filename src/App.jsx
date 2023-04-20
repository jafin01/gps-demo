import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import "./app.css";
import MainBox from "./components/MainBox";
import Map from "./components/Map";




function App() {
const [selectedOption, setSelectedOption] = useState("");


  return (
    <div className="grid grid-cols-4">
      <MainBox selectedOption={selectedOption} setSelectedOption={setSelectedOption}></MainBox>
      <div className="col-span-3">
        <Map layerData={selectedOption} ></Map>
      </div>
    </div>
  );
}

export default App;
