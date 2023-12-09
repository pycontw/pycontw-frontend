<template>
        <l-map
            ref="leafletMap"
            style="height: 500px"
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
            <l-control
                position="topright"
                class="leaflet-bar custom-control rounded-sm"
            >
                <button
                    class="h-[30px] w-[30px] bg-white leading-[30px]"
                    @click="centerMap"
                >
                    <img
                        class="m-auto"
                        :src="venueButtonUrl"
                        alt="venue-center-btn"
                    />
                </button>
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
            venueButtonUrl: require('@/static/venue-button.png'),
            currentCenter: [25.040997, 121.611417],
            options: {
                zoomControl: false,
                scrollWheelZoom: false,
                minZoom: 10,
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
            zoom: 16,
            icon: icon({
                iconUrl: '/2023/snake.png',
                shadowUrl: '/2023/snake-bg.png',
                iconSize: [42, 42],
                iconAnchor: [21, 21],
                shadowSize: [45, 55],
                shadowAnchor: [25, 30],
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

<style scoped></style>
