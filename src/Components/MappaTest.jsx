import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MappaTest = ({ latitudine, longitudine, titolo }) => {
  if (
    latitudine === null ||
    longitudine === null ||
    typeof latitudine === "undefined" ||
    typeof longitudine === "undefined"
  ) {
    return (
      <div className="text-center text-muted mt-5">
        <p>📍 Posizione non disponibile</p>
      </div>
    );
  }

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={[latitudine, longitudine]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        <Marker position={[latitudine, longitudine]}>
          <Popup>{titolo} 🧭</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MappaTest;
