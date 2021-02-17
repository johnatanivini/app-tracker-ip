import env from 'react-dotenv'

const apiKey=`?apiKey=${env.IPFY_API_KEY}`

export const getDomain = async (domain) => {

    const res = await fetch(`${env.IPFY_API_URL}${apiKey}&domain=${domain}`);

    const json = await res.json()

    return json
}


