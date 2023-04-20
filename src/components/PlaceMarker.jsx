import React from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/9131/9131546.png",
  iconSize: [35, 35],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const PlaceMarker = ({position}) => {
    const map = useMap();
    map.flyTo(position, 12, {
        duration: 2
      });      
  return (
    <Marker position={position} icon={markerIcon} interactive={false}>
        <Popup>You are here !</Popup>
    </Marker>
  )
}

export default PlaceMarker