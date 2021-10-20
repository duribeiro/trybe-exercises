import React, { Component } from 'react'
import { Map, Marker } from "pigeon-maps"

export default class ISSLocation extends Component {
  render() {
    const latitude = 2.81954;
    const longitude = -60.6714;
    return (
      <div>
        <Map
          center={[0,0]}
          defaultWidth={450}
          height={450}
          minZoom={1.5}
          maxZoom={8}
          zoom={1.5}
        >
          <Marker width={50} anchor={[latitude, longitude]} />
        </Map>
      </div>
    )
  }
}

// documentação do mapa https://pigeon-maps.js.org/docs/installation