import { useEffect, useState } from 'react'
import { MapContext} from '../context/MapContext'
import env from 'react-dotenv'




const MapProvider = ({children}) => {

    const initialPosition = [-3.731862, -38.526669]

    const[location, setLocation] = useState(initialPosition)

    const[geoIpFy, setGeoIpFy] = useState('')

    const[dadosMapa, setDadosMapa] = useState(false)

    const[isLoading, setIsLoading] = useState(false)


    const setDomain = async (domain) => {
        
        setGeoIpFy(domain)

        setIsLoading(true)

        const dados = await GetDomain()
        
        setDadosMapa(dados)

        setLocation([dados.location?.lat, dados.location?.lng])

        console.log(location)

        setIsLoading(false)
       
    }

    const apiKey=`?apiKey=${env.IPFY_API_KEY}`

    async function  GetDomain(){
        
        const res = await fetch(`${env.IPFY_API_URL}${apiKey}&domain=${geoIpFy}`);
        const json = await res.json()
        return json
    }


    return (
        
        <MapContext.Provider value={{geoIpFy, setDomain, dadosMapa, isLoading, location, initialPosition}}>
            {children}
        </MapContext.Provider>
        
    )

}

export default MapProvider;