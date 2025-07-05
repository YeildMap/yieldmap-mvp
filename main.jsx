import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
