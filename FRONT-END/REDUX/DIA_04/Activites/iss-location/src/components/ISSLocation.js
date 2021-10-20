import React, { Component } from 'react'
import { Map, Marker } from "pigeon-maps"

export default class ISSLocation extends Component {
  render() {
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
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
    )
  }
}

// documentação do mapa https://pigeon-maps.js.org/docs/installation