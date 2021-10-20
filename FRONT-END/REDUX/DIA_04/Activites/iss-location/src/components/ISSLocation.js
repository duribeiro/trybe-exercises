import React, { Component } from 'react'
import { Map, Marker } from "pigeon-maps"

export default class ISSLocation extends Component {
  render() {
    return (
      <div>
        <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
    )
  }
}

// documentação do mapa https://pigeon-maps.js.org/docs/installation