import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import Loading from '../../assets/image/loading.gif'
import './stylePetaBeranda.css'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

mapboxgl.accessToken = 'pk.eyJ1IjoibnVlbHZzIiwiYSI6ImNsYjJhYjhwZzAyc3kzb3MwY2phbHpmbXcifQ.dgj4J7DNpOHg9k7kGBuGdw';

export default function Peta() {
    const config = {
		headers: { Authorization: "Bearer " + sessionStorage.getItem('token') },
	};

    const [viewPort] = useState({
        latitude: -7.797068,
        longitude: 110.370529,
        zoom: 10,
    });

    const [gerejaData, setGerejaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const convertToGeoJSON = (jsonData) => {
        const features = jsonData.map((item) => ({
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [item.geometry.coordinates[1], item.geometry.coordinates[0]],
            },
            properties: {
                id: item._id,
                name: item.properties.name,
                address: item.properties.address,
                province: item.properties.province,
                readiness: item.properties.disasterOccurs,
            },
        }));

        return {
            type: "FeatureCollection",
            crs: {
                "type": "name",
                "properties": {
                    "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
                }
            },
            name: "Titikkoordinat",
            features: features
        };
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_KEY + "api/churches", config);
                setGerejaData(res.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch data");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!gerejaData) return;
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [viewPort.longitude, viewPort.latitude],
            zoom: viewPort.zoom,
            bearing: 360.0,
        });
        const geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken, mapboxgl: mapboxgl, marker: false});
        map.addControl(geocoder, 'top-left');
        map.addControl(new mapboxgl.NavigationControl(), "top-left");
        
        map.on("style.load", () => {
            map.setFog({});
        });

        map.on('load', () => {

            const geojsonData = convertToGeoJSON(gerejaData);

            map.addSource("sample", {
                type: "geojson",
                data: geojsonData,
            });

            map.addLayer({
                id: "sample-layer",
                type: "circle",
                source: "sample",
                paint: {
                    "circle-radius": 5,
                    "circle-stroke-width": 2,
                    "circle-color": "red",
                    "circle-stroke-color": "white",
                },
            });

            map.addLayer({
                id: "sample-label",
                type: "symbol",
                source: "sample",
            });

            map.on("click", "sample-layer", (e) => {
                const geometry = e.features[0].geometry;
                const properties = e.features[0].properties;
                const sidebar = document.getElementById('sidebar');
                sidebar.style.width = '275px';
                sidebar.style.padding = '10px';
                if (geometry.type === 'Point') {
                    const coordinates = geometry.coordinates.slice();
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }
                    sidebar.innerHTML = ("<div id='custom'>" +
                        "<h4>Informasi Gereja</h4>" +
                        "<table>" +
                        "<tr>" +
                        "<td>Nama </td>" +
                        "<td>" + properties.name + "</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td>Alamat </td>" +
                        "<td>" + properties.address + "</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td>Provinsi </td>" +
                        "<td>" + properties.province + "</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td>Kesiapan </td>" +
                        "<td>" + properties.readiness + "</td>" +
                        "</tr>" +
                        "</table>" +
                        "<div><a id='link' href='/gereja_detail/"+properties.id+"'>Lihat Detail &#8594;</a></div>"+
                        "</div>"
                    )
                }
            });

            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false,
                closeOnMove: true,
                className: 'popup'
            })

            map.on("mouseenter", "sample-layer", (e) => {
                map.getCanvas().style.cursor = "pointer";
                const geometry = e.features[0].geometry;
                const properties = e.features[0].properties;
                if (geometry.type === 'Point') {
                    const coordinates = geometry.coordinates.slice();
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }
                    popup
                        .setLngLat(coordinates)
                        .setHTML('<div>' + properties.name + '</div>')
                        .addTo(map)
                }
            });

            map.on("mouseleave", "sample-layer", () => {
                // Handle mouseleave event on the marker layer
                map.getCanvas().style.cursor = "";
                popup.remove();

            });
        })

        // Clean up the map instance on component unmount
        return () => {
            map.remove();
        }

    }, [gerejaData]);

    if (loading) {
        return <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }} ><img src={Loading} alt='loading' style={{
            width: '50px',
            display: 'inline-block',
            verticalAlign: 'middle',
        }} ></img></div>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <div className="map-sidebar-container">
            <style>
                {`
                .mapboxgl-ctrl-group {
                    display: none !important; 
                } 
                .mapBeranda { 
                    border-radius: 10px !important; 
                }
                @media (max-width: 1359px) {
                    #map {
                        width: 100%;
                        max-width: 90%;
                    }
                }
                @media (max-width: 1000px) {
                    #map {
                        width: 80%;
                    }
                }
                @media (max-width: 440px) {
                    #map {
                        width: 72%;
                    }
                }`}
            </style>
            <div id="map" className="mapBeranda"></div>
            <div id="sidebar" className="sidebarBeranda">
                {/* Sidebar content */}
            </div>
        </div>
    );
};