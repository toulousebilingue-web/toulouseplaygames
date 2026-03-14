"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
// Importation obligatoire du CSS pour que la carte ne soit pas cassée
import "leaflet/dist/leaflet.css";

// Correction pour les icônes Leaflet (sinon le marqueur est invisible)
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Petit composant pour déplacer la caméra de la carte
function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 15);
  }, [center, map]);
  return null;
}

export default function LocationMap({ address }: { address: string }) {
  const [position, setPosition] = useState<[number, number]>([43.6047, 1.4442]); // Toulouse par défaut

  // Système qui transforme l'adresse en coordonnées GPS
  useEffect(() => {
    const geocode = async () => {
      if (!address || address.length < 6) return;
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
        );
        const data = await res.json();
        if (data && data[0]) {
          setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      } catch (error) {
        console.error("Erreur de géocodage:", error);
      }
    };

    const timer = setTimeout(geocode, 1000); // On attend 1s après la frappe
    return () => clearTimeout(timer);
  }, [address]);

  return (
    <div className="h-[300px] w-full rounded-2xl overflow-hidden border-2 border-muted relative z-0">
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon} />
        <ChangeView center={position} />
      </MapContainer>
    </div>
  );
}