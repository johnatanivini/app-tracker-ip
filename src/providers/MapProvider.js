import { useState } from 'react'
import { MapContext} from '../context/MapContext'

const MapProvider = ({children}) => {

    const[geoIpFy, setGeoIpFy] = useState('gov.br')
    const [dados, setDados] = useState(null)

    const setDomain = async (domain) => {

        setGeoIpFy(domain)       
    }

    const setDadosCarregados = (dados) => {
        setDados(dados)
    }

    return (
        
        <MapContext.Provider value={{geoIpFy,dados, setDadosCarregados, setDomain}}>
            {children}
        </MapContext.Provider>
        
    )

}

export default MapProvider