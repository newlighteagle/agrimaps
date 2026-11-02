import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { defaults as defaultControls } from "ol/control/defaults";
import { fromLonLat, toLonLat } from "ol/proj";
import { MapboxVectorLayer } from "ol-mapbox-style";
import {
  getTheme,
  onThemeChange,
  setupThemeToggle,
  type Theme,
} from "../../../../src/shared/theme.ts";

setupThemeToggle();

const lightBasemap = new MapboxVectorLayer({
  styleUrl: "https://tiles.openfreemap.org/styles/positron",
  className: "basemap",
});

const darkBasemap = new MapboxVectorLayer({
  styleUrl: "https://tiles.openfreemap.org/styles/dark",
  className: "basemap",
});

function showBasemap(theme: Theme): void {
  lightBasemap.setVisible(theme === "light");
  darkBasemap.setVisible(theme === "dark");
}

showBasemap(getTheme());
onThemeChange(showBasemap);

const map = new Map({
  target: "map",
  layers: [lightBasemap, darkBasemap],
  controls: defaultControls({ attributionOptions: { collapsible: false } }),
  view: new View({
    center: fromLonLat([20, 12]),
    zoom: 2,
  }),
});

const coordsEl = document.querySelector<HTMLSpanElement>("#coords");

map.on("moveend", () => {
  const center = map.getView().getCenter();
  if (!coordsEl || !center) {
    return;
  }
  const [lon, lat] = toLonLat(center);
  coordsEl.textContent = `Lat ${lat.toFixed(2)}° · Lon ${lon.toFixed(2)}°`;
});
