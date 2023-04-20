import React from 'react'
import { useEffect } from 'react';
import { Marker, useMap } from 'react-leaflet';
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/9131/9131546.png",
  iconSize: [35, 35],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const RoutingControl = ({ waypoints, router }) => {

  const [x,y] = waypoints[0];

    const map = useMap();

    var movingMarker = L.marker([x,y],{icon: markerIcon},{ interactive: false }).addTo(map);

    useEffect(() => {
      const routing = L.Routing.control({
        waypoints,
        router,
        lineOptions: { addWaypoints: false },
      }).on("routesfound" , function(e){

        e.routes[0].coordinates.forEach((coord , index)=>{
            setTimeout(()=>{
              movingMarker.setLatLng([coord.lat,coord.lng]);
            },1*index)
        })
      });
      routing.addTo(map);
      // return () => {
      //   routing.removeFrom(map);
      // };
    }, [waypoints, router]);

    return null;
 
}

export default RoutingControl