import React from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'

const PlaceMarker = ({position}) => {
    const map = useMap();
    map.flyTo(position, 12, {
        duration: 2
      });
  return (
    <Marker position={position}>
        <Popup>You are here !</Popup>
    </Marker>
  )
}

export default PlaceMarker