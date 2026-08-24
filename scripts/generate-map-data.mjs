import { geoMercator, geoPath } from "d3-geo";
import * as topojson from "topojson-client";
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const world = require("world-atlas/countries-110m.json");

const countries = topojson.feature(world, world.objects.countries);

// Philippines ISO numeric code (ISO 3166-1) = 608
const PHILIPPINES_ID = "608";

const WIDTH = 1000;
const HEIGHT = 620;

// Bounding region: Middle East through Southeast Asia.
// Using explicit corner points (not a Polygon) for fitExtent — a Polygon here
// caused d3 to compute the fit against the wrong bounds (whole-world scale).
const regionBounds = {
  type: "MultiPoint",
  coordinates: [
    [22, -14],
    [148, -14],
    [148, 56],
    [22, 56],
  ],
};

const projection = geoMercator().fitExtent(
  [
    [0, 0],
    [WIDTH, HEIGHT],
  ],
  regionBounds
);

const path = geoPath(projection);

let philippinesPath = "";

for (const feature of countries.features) {
  if (feature.id !== PHILIPPINES_ID) continue;
  const d = path(feature);
  if (d) philippinesPath += d;
}

const markers = {
  philippines: { lon: 121.0, lat: 14.6, label: "Philippines" },
  kuwait: { lon: 47.98, lat: 29.38, label: "Kuwait" },
  qatar: { lon: 51.53, lat: 25.29, label: "Qatar" },
  saudiArabia: { lon: 46.7, lat: 24.7, label: "Saudi Arabia" },
  uae: { lon: 54.37, lat: 24.45, label: "United Arab Emirates" },
  indonesia: { lon: 106.85, lat: -6.2, label: "Indonesia" },
};

const projectedMarkers = {};
for (const [key, m] of Object.entries(markers)) {
  const [x, y] = projection([m.lon, m.lat]);
  projectedMarkers[key] = { x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100, label: m.label };
}

const output = {
  width: WIDTH,
  height: HEIGHT,
  philippinesPath,
  markers: projectedMarkers,
};

fs.mkdirSync("src/lib", { recursive: true });
fs.writeFileSync(
  "src/lib/world-map-data.json",
  JSON.stringify(output)
);

console.log("Generated map data:", {
  width: WIDTH,
  height: HEIGHT,
  philippinesPathLength: philippinesPath.length,
  markers: projectedMarkers,
});
