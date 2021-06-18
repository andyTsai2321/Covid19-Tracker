import React, { useState, useEffect, shouldComponentUpdate } from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { showDataOnMap } from '../../utils/util'
import "./Map.scss"

function MapJS({themeType, countries, casesType, center, zoom}) {
    return (
        <div className="map">
            <Map center={center} zoom={zoom}>
                <TileLayer
                url={themeType === 'dark'? 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png':'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors">
                
                </TileLayer>
                {showDataOnMap(countries, casesType)}
            </Map>
        </div>
    )
}

export default MapJS
