<template>
    <l-map
        ref="leafletMap"
        style="height: 300px"
        :zoom="zoom"
        :center="center"
        :options="options"
    >
        <l-tile-layer
            v-for="tileProvider in tileProviders"
            :key="tileProvider.name"
            :name="tileProvider.name"
            :visible="tileProvider.visible"
            :url="tileProvider.url"
            :attribution="tileProvider.attribution"
            layer-type="base"
        />
        <l-control-layers position="bottomright"></l-control-layers>
        <l-control-zoom position="topright"></l-control-zoom>
        <l-control position="topright" class="custom-control">
            <p @click="centerMap">Go Back</p>
        </l-control>
        <l-marker :lat-lng="markerLatLng" :icon="icon">
            <l-tooltip
                :options="{
                    offset: [-4, 20],
                    direction: 'bottom',
                }"
                >中央研究院 人文社會科學館</l-tooltip
            ></l-marker
        >
    </l-map>
</template>

<script>
import {
    LMap,
    LControl,
    LTileLayer,
    LMarker,
    LControlZoom,
    LControlLayers,
    LTooltip,
} from 'vue2-leaflet'
import { icon } from 'leaflet'
export default {
    name: 'VenueMap',
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LControlZoom,
        LControlLayers,
        LTooltip,
        LControl,
    },
    data() {
        return {
            communityImgUrl: {},
            options: {
                zoomControl: false,
                scrollWheelZoom: false,
            },
            tileProviders: [
                {
                    name: 'Stamen',
                    visible: false,
                    attribution:
                        'Tiles by <a href="https://stamen.com">Stamen Design</a>. Data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors.',
                    url: 'http://{s}.sm.mapstack.stamen.com/((toner-background,$fff[@20],$000[hsl-color])[@90],(toner-lines,$fff[@80],$fff[hsl-saturation@20],$502526[hsl-color]),(toner-labels,$fff[@30]))/{z}/{x}/{y}.png',
                },
                {
                    name: 'Transport',
                    visible: true,

                    attribution:
                        'Maps &copy; <a href="https://www.thunderforest.com" target="_blank" rel="noopener">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap </a> contributors.',
                    url: 'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38',
                },
            ],
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            zoom: 15,
            icon: icon({
                iconUrl: '/snake-icon.png',
                iconSize: [41, 42],
                iconAnchor: [33, 15],
            }),
            center: [25.040997, 121.611417],
            markerLatLng: [25.040997, 121.611417],
        }
    },
    methods: {
        centerMap() {
            this.$nextTick(() => {
                this.$refs.leafletMap.mapObject.panTo([25.040997, 121.611417])
            })
        },
    },
}
</script>

<style scoped>
.custom-control {
    cursor: pointer;
    background: #fff;
    padding: 0 0.5em;
    border: 1px solid #aaa;
    border-radius: 0.1em;
}
</style>
