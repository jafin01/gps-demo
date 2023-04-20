import React, { useState, useRef } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useMapContext } from "../context/MapContext";
import PlaceMarker from "./PlaceMarker";
import useFetchLocation from "../hooks/useFetchLocation";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import RoutingControl from "./RoutingControl";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/9131/9131546.png",
  iconSize: [35, 35],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const Map = () => {
  const { placeCoordinates, selectLayer, startCoords, endCoords } =
    useMapContext();

  const location = useFetchLocation();

  const mapRef = useRef();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      const { lat, lng } = location.coords;
      mapRef.current.setView([lat, lng], 10, { animate: true });
    }
  };

  return (
    <>      
      <MapContainer
        center={[28.7041, 77.1025]}
        zoom={10}
        className="h-screen"
        ref={mapRef}
      >
        <TileLayer
          attribution={`&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors`}
          url={
            selectLayer.url
              ? selectLayer.url
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
          subdomains={selectLayer.subdomains || ["a", "b", "c"]}
        />
        {placeCoordinates && <PlaceMarker position={placeCoordinates} />}
        {location.loaded && !location.error && (
          <Marker
            icon={markerIcon}
            position={[location.coords.lat, location.coords.lng]}
          ></Marker>
        )}
        {startCoords && (
          <>
            <Marker
              position={startCoords}
              interactive={false}
              icon={markerIcon}
            ></Marker>
            <Marker
              position={endCoords}
              interactive={false}
              icon={markerIcon}
            ></Marker>
            <RoutingControl
              waypoints={[startCoords, endCoords]}
              router={L.Routing.osrmv1()}
            ></RoutingControl>
          </>
        )}
      </MapContainer>
    </>
  );
};

export default Map;
