"use client";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useRef, useEffect } from "react";

// Fix for default icon URLs
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinalUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const Map = ({ center, zoom }) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    isInitialized.current = true;
    return () => {
      isInitialized.current = false;
    };
  }, []);

  if (!isInitialized) return null;

  const customIcon = new L.Icon({
    iconUrl: "/images/marker1-nobg.png",
    iconSize: [80, 80],
    iconAnchor: [16, 32], // The point of the icon which will correspond to the marker's location
    popupAnchor: [0, -32], // Position of the popup
  });

  const defaultCenter = center || [11.5564, 104.9282];
  const defaultZoom = zoom || 12;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={false}
      className="w-full h-[500px] mt-8 rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={defaultCenter} icon={customIcon} />
    </MapContainer>
  );
};

export default Map;
