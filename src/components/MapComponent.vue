<template>
  <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  name: "Map",
  data() {
    return {
      map: null,
      center: [37, 7749, -122, 4194],
      popup: null,
    };
  },
  methods: {
    addMarket(name, lat, lng) {
      L.marker([lat, lng], { riseOnHover: true, alt: name, title: name }).addTo(
        this.map
      );
    },
    clickToMap(e) {
      this.$emit("clickToMap", e.latlng);
    },
    setupLeafletMap() {
      this.map = L.map("mapContainer").setView(
        [48.987435974908905, 31.442871093750004],
        6
      );

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(this.map);
      this.map.on("click", this.clickToMap);
      this.popup = L.popup();
    },
  },
  mounted() {
    this.setupLeafletMap();
  },
};
</script>

<style>
#mapContainer {
  height: 80vh;
  width: 100%;
}
</style>
