import 'leaflet/dist/leaflet.css'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { MapContext } from '../context/MapContext'
import { MapContainer as Map, Marker, Popup, TileLayer} from 'react-leaflet'
import Leaflet from 'leaflet'

const MapId = styled.div``

const BoxMap = () => {  

  const {dadosMapa} = useContext(MapContext)


  return (

      <MapId>
        <Map>

        </Map>
        <pre>
          {JSON.stringify(dadosMapa, null, 4)}
        </pre>
      </MapId>
    
  )
}


export default BoxMap