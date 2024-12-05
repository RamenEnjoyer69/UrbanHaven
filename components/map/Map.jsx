"use client";
import L from "leaflet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/leaflet";
import markerIcon2x from "leaflet/dist/leaflet";
import markerShadow from "leaflet/dist/leaflet";
import { useRef, useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinalUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
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

  return (
    <MapContainer
      center={center || [51, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
      className="w-full h-[500px] mt-8 rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {center && <Marker position={center} />} */}
    </MapContainer>
  );
};

export default Map;
