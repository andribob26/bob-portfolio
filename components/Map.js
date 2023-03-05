import React, { useEffect, useState, useRef, memo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useTheme } from "next-themes";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const Routing = ({ wayPoints }) => {
  const map = useMap();
  // const tes = useRef(null);
  useEffect(() => {
    if (map) {
      let routerMap = L.Routing.control({
        // router: L.Routing.osrmv1({
        //   serviceUrl: `http://router.project-osrm.org/route/v1`,
        // }),
        addWaypoints: false,
        distanceTemplate: "ad",
        lineOptions: {
          styles: [
            {
              stroke: true,
              color: "rgb(248 113 113)",
              weight: 2,
            },
          ],
        },
        waypoints: wayPoints,
        createMarker: (i, waypoint, n) => {
          let marker_icon;
          if (i === 0) {
            marker_icon = L.icon({
              iconUrl: "./images/andribob.jpg",
              iconSize: [38, 38],
              iconAnchor: [20, 36],
              className:
                "rounded-full object-cover border bottom-4 border-red-500",
            });
          } else {
            marker_icon = L.icon({
              iconUrl: "./images/pin.png",
              iconSize: [38, 38],
              iconAnchor: [20, 36],
            });
          }
          const marker = L.marker(waypoint.latLng, {
            draggable: false,
            bounceOnAdd: true,
            icon: marker_icon,
          });

          return marker;
        },
      }).addTo(map);

      if (wayPoints.length > 1) {
        map.fitBounds(wayPoints);
      }

      routerMap.on("routesfound", function (e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        const centerCoord = Math.round(routes[0].coordinates.length / 2);
        const pop =
          `<div>
              <div>Jarak : <b>` +
          Math.round(summary.totalDistance / 1000) +
          ` Km</b></div>
          </div>`;

        var marker = L.marker(
          [
            routes[0].coordinates[centerCoord].lat,
            routes[0].coordinates[centerCoord].lng,
          ],
          {
            icon: L.icon({
              iconUrl: "./images/pin.png",
              className: "opacity-0",
              iconSize: [38, 38],
              iconAnchor: [20, 36],
            }),
          }
        ).bindTooltip(pop, {
          permanent: true,
          direction: "top",
        });
        if (e.type === "routesfound") {
          map.addLayer(marker);
        }
      });
    }
  }, [map, wayPoints]);

  return null;
};

const Map = ({ coords }) => {
  const { theme } = useTheme(null);
  const [wayPoints, setWayPoints] = useState([
    L.latLng(-6.482915908093935, 107.97263298017063),
  ]);
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    if (coords) {
      if (!isNaN(coords.latitude) || !isNaN(coords.longitude)) {
        setWayPoints((wayPoints) => {
          return [...wayPoints, L.latLng(coords.latitude, coords.longitude)];
        });
      }
    }
  }, [coords]);

  // useEffect(() => {
  //   if (map) {
  //     console.log(map);

  //     // map.target.setWayPoints(wayPoints);
  //   }
  // }, [wayPoints]);
  // // useEffect(() => {
  // //   if (RoutingMachineRef.current) {
  // //     console.log(RoutingMachineRef.current);
  // //   }
  // // }, [RoutingMachineRef.current]);

  useEffect(() => {
    switch (theme) {
      case "light":
        setMapUrl(
          "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        );
        break;
      case "dark":
        setMapUrl(
          "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        );
        break;
    }
  }, [theme]);
  return (
    <MapContainer
      center={[-6.482915908093935, 107.97263298017063]}
      style={{
        width: "100%",
        height: "300px",
        borderRadius: "0.25rem",
        zIndex: "0",
      }}
      zoom={9}
      zoomControl={false}
      scrollWheelZoom={true}
      attributionControl={false}
    >
      <TileLayer
        subdomains={`abcd`}
        attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}
        url={mapUrl}
      />
      <Routing wayPoints={wayPoints} />
    </MapContainer>
  );
};

export default Map;
