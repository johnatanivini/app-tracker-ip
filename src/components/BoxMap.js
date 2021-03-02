import 'leaflet/dist/leaflet.css'
import { useContext, useEffect, useState} from 'react'
import { MapContext } from '../context/MapContext'
import { MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import iconLocation from './../assets/iconLocation.svg'
import Leaflet from 'leaflet'
import { getApiById } from '../api/db'


const initialPosition = [-3.731862, -38.526669]

const MapLayer  = ({mapIcon,dadosMapa, location}) => {

  const map = useMap()
  
  map.flyTo(location)

  return (
          <>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={mapIcon}
            position={location}
            
          >

          {dadosMapa && <Popup
                autoPan={true}
                closeButton={false}
            >
            
              <h3>{dadosMapa.as.name}</h3>
              <p>{`${dadosMapa.location.country } - ${ dadosMapa.location.region}, ${dadosMapa.location.city}`}</p>
              <p>{dadosMapa.as.domain}</p>
              <p>{dadosMapa.isp}</p>
              <p>{dadosMapa.ip}</p>
            </Popup>

      } 

      </Marker>
    </>
  )

}


const BoxMap = () => {


  const {geoIpFy, setDadosCarregados} = useContext(MapContext)

  const [location, setLocation] = useState(initialPosition)
  const [dadosMapa, setDadosMapa] = useState(null)

  const mapIcon = Leaflet.icon({
    iconUrl:iconLocation,
    iconSize:[58,58],
    iconAnchor:[10,58],
    popupAnchor:[20,-60]
  })

  useEffect(() => {
    // const fetchData = async () => { 
    //   //const res = await fetch(`${env.IPFY_API_URL}?apiKey=${env.IPFY_API_KEY}&domain=${geoIpFy}`);
    //   await  fetch(`http://localhost:3001/getLocation/${geoIpFy}`).then((result) => {
    //     return result.json()
    //   }).then((data) => {

    //     const {location:{ltd,lng}} = data;
    //     setDadosMapa(data)
    //     setLocation([ltd,lng])

    //   }).catch((error) => {
    //     setDadosMapa(null)
    //     setLocation(initialPosition)
    //     console.log('Não encontramos!')
    //   })
    // }
    getApiById(geoIpFy)
      .then((response) => response)
      .then((data) => {
        const {location:{ltd,lng}} = data;
        setDadosMapa(data)
        setLocation([ltd,lng])
      
    }).catch((error) => {
       console.log(error)
       setDadosMapa(null)
       setLocation(initialPosition)
       console.log('Não encontramos!')
    })
  },[geoIpFy])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setDadosCarregados(dadosMapa)
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dadosMapa])


  return (    
      
        <MapContainer
          zoomAnimationThreshold={18}
          markerZoomAnimation={true}
          zoomAnimation={true}
          center={location}
          zoom={15}
          scrollWheelZoom={true}
          style={{width:'100vw',height:'90vh', marginTop:'2vh'}}
          flyTo={location}
        > 
          
           <MapLayer location={location} dadosMapa={dadosMapa} mapIcon={mapIcon} />
  
        </MapContainer> 
      
  )
}


export default BoxMap