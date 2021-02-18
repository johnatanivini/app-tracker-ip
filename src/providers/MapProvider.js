import { useState } from 'react'
import { MapContext} from '../context/MapContext'




const MapProvider = ({children}) => {


    const[geoIpFy, setGeoIpFy] = useState('gov.br')

    const setDomain = async (domain) => {

        setGeoIpFy(domain)       
    }

    return (
        
        <MapContext.Provider value={{geoIpFy, setDomain}}>
            {children}
        </MapContext.Provider>
        
    )

}

export default MapProvider;