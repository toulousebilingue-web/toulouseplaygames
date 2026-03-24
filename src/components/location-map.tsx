
'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 13);
  }, [center, map]);
  return null;
}

interface LocationMapProps {
  address?: string;
}

export default function LocationMap({ address }: LocationMapProps) {
  const [coords, setCoords] = useState<[number, number]>([43.6047, 1.4442]); // Toulouse default

  useEffect(() => {
    if (!address || address.length < 5) return;

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address + ', Toulouse')}`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          setCoords([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
      } catch (error) {
        console.error('Geocoding error:', error);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [address]);

  return (
    <div className="h-[300px] w-full rounded-2xl overflow-hidden border-2 border-muted shadow-inner relative z-10">
      <MapContainer center={coords} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords} />
        <MapUpdater center={coords} />
      </MapContainer>
    </div>
  );
}
