<script>
import MapComponent from "../components/MapComponent.vue";
export default {
  components: { MapComponent },
  data() {
    return {
      showModal: false,
      name: "",
      lat: "",
      lng: "",
      pins: [],
    };
  },
  mounted() {
    if (window.localStorage.getItem("pins")) {
      const pins = JSON.parse(window.localStorage.getItem("pins"));
      pins.forEach((pin) => {
        this.pins.push(pin);
        this.$refs.mapComp.addMarket(pin.name, pin.lat, pin.lng);
      });
    }
  },
  watch: {
    pins: {
      deep: true,
      handler() {
        window.localStorage.setItem("pins", JSON.stringify(this.pins));
      },
    },
  },
  methods: {
    setLatLng(e) {
      const { lat, lng } = e;
      this.lat = lat;
      this.lng = lng;
      this.showModal = true;
    },

    addPin() {
      this.pins.push({
        name: this.name,
        lat: this.lat,
        lng: this.lng,
      });
      this.$refs.mapComp.addMarket(this.name, this.lat, this.lng);
      this.showModal = false;
      this.resetData();
    },
    resetData() {
      this.name = "";
      this.lat = "";
      this.lng = "";
    },
    nameInput(e) {
      this.name = e.target.value;
    },
    latInput(e) {
      this.lat = e.target.value;
    },
    lngInput(e) {
      this.lng = e.target.value;
    },
  },
};
</script>

<template>
  <div>
    <button @click="showModal = true" class="btn-class create-marker">
      Create marker
    </button>
    <MapComponent @clickToMap="setLatLng" ref="mapComp"></MapComponent>
    <transition name="modal">
      <modal v-if="showModal" @close="showModal = false">
        <template v-slot:header>
          <h3>Set pin</h3>
        </template>
        <template v-slot:body>
          <div class="input-wrapper">
            <p>Name pin</p>
            <input type="text" @input="nameInput" :value="name" />
          </div>
          <div class="input-wrapper">
            <p>Latitude</p>
            <input type="text" @input="latInput" :value="lat" />
          </div>
          <div class="input-wrapper">
            <p>Longitude</p>
            <input type="text" @input="lngInput" :value="lng" />
          </div>
        </template>
        <template v-slot:footer>
          <button class="btn-class close" @click="showModal = false">
            Close
          </button>
          <button class="btn-class confirm" @click="addPin">Confirm</button>
        </template>
      </modal>
    </transition>
  </div>
</template>

<style>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-wrapper input {
  border-radius: 12px;
  padding: 4px;
  margin-top: 4px;
}

.btn-class {
  border-radius: 12px;
  padding: 4px 8px;
  margin: 0 12px;
  font-weight: bold;
  cursor: pointer;
}
.confirm {
  background: greenyellow;
}
.close {
  background: red;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

.create-marker {
  position: absolute;
  top: 20px;
  right: 20%;
  text-transform: uppercase;
}
</style>
