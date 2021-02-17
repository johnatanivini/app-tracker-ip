import { useState } from 'react'
import { MapContext} from '../context/MapContext'
import { getDomain } from '../services/GetDomain'


const MapProvider = ({children}) => {

    const[geoIpFy, setGeoIpFy] = useState('')

    const[dadosMapa, setDadosMapa] = useState({})

    const loadMapa = async () => {
        /// consumir API
         const dados  = await getDomain(geoIpFy)
        /// obter retorno da api
        ///setar estado
        setDadosMapa(dados)
    }


    const setDomain = (domain) => {
        setGeoIpFy(domain)
        loadMapa()
    }

    return (
        
        <MapContext.Provider value={{geoIpFy, setDomain, dadosMapa}}>
            {children}
        </MapContext.Provider>
        
    )

}

export default MapProvider;