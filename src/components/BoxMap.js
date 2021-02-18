import 'leaflet/dist/leaflet.css'
import { useContext, useEffect, useState } from 'react'
import { MapContext } from '../context/MapContext'
import { MapContainer, Marker, Popup, TileLayer, useMapEvent, useMapEvents} from 'react-leaflet'
import iconLocation from './../assets/iconLocation.svg'
import Leaflet from 'leaflet'



const BoxMap = () => {

  const {dadosMapa, location, initialPosition} = useContext(MapContext)

  const mapIcon = Leaflet.icon({
    iconUrl:iconLocation,
    iconSize:[58,58],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
  })

  return (    
      <>
        {location && <MapContainer
          center={location}
          zoom={5}
          scrollWheelZoom={true}
          style={{width:'100vw',height:'90vh', marginTop:'10vh'}}
          flyTo={location}
        > 
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {location && <Marker
            icon={mapIcon}
            position={location}
            
          >
          
            {dadosMapa && <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
            >
            
              <h3>{dadosMapa.as.name}</h3>
              <p>{`${dadosMapa.location.country } - ${ dadosMapa.location.region}, ${dadosMapa.location.city}`}</p>
              <p>{dadosMapa.as.domain}</p>
              <p>{dadosMapa.isp}</p>
              <p>{dadosMapa.ip}</p>
            </Popup>
          }
          </Marker>}
        </MapContainer> }
      </>
  )
}


export default BoxMap