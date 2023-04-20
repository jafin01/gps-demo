import { createContext, useContext, useState } from "react";
import L from "leaflet";

const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [placeCoordinates, setPlaceCoordinates] = useState(null);
  const [selectLayer, setSelectLayer] = useState({
    name: "Normal View",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    subdomains: undefined,
  });

  const [startCoords, setStartCoords] = useState(null);
  const [endCoords, setEndCoords] = useState(null);

  const [distance, setDistance] = useState(null);



  console.log(startCoords , endCoords);

  const calculateDistance = (start, end) => {
    if (start && end) {
      const startLatLng = L.latLng(start);
      const endLatLng = L.latLng(end);

      const distance = startLatLng.distanceTo(endLatLng);

      setDistance(distance);
    } else {
      setDistance(null);
    }
  };

  return (
    <MapContext.Provider
      value={{
        placeCoordinates,
        setPlaceCoordinates,
        selectLayer,
        setSelectLayer,
        startCoords,
        setStartCoords,
        endCoords,
        setEndCoords
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  return useContext(MapContext);
};
