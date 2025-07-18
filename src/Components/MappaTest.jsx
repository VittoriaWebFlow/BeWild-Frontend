import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MappaTest = () => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={[45.0703, 7.6869]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        <Marker position={[45.0703, 7.6869]}>
          <Popup>Ciao! Questo è Torino 🏙️</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MappaTest;
