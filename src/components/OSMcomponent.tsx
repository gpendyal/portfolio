// src/components/OSMComponent.tsx

import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS to fix styling
import * as L from 'leaflet';

const OSMComponent: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([51.505, -0.09], 13);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <div
        ref={(el) => {
          if (el && !mapRef.current) {
            mapRef.current = L.map(el);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapRef.current);
          }
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default OSMComponent;
