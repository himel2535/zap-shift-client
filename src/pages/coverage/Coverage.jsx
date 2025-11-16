import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.8103, 90.4125];
  const serviceCenters = useLoaderData();
  console.log(serviceCenters);
  return (
    <div className="my-15">
      <h1 className="text-4xl font-bold text-secondary ">
        We are available in 64 districts
      </h1>
      <div>search</div>
      {/* ---google map-- */}
      <div className="border w-full h-[700px]">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[700px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
