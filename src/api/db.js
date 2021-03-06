const api = [
        {
            id:"gov.br",
            location: {
                region:"DF",
                city:"Brasília",
                ltd:"-15.780150413513184",
                lng:"-47.929168701171875",
                country:"Brazil"
            },
            as:{
                "domain":"gov.br",
                "name":"Servico Federal De Processamento De Dados - Serpro"
            },
            isp:"Servico Federal De Processamento De Dados - Serpro",
            ip:"161.148.164.31"
        },
        {
            id:"cloudflare.com",
            location: {
                region:"AU",
                city:"Sydney",
                ltd:"-33.86714172363281",
                lng:"151.2071075439453",
                country:"Australia"
            },
            as:{
                domain:"cloudflare.com",
                name:"Cloudflare"
            },
            isp:"Cloudflare",
            ip:"161.148.164.31"
        }
    ]

export const getApiById = async (id) => {
    const domain =  api.find((value) => value.id === id)

    if(!domain){
        throw new Error('Dominio não encontrado!');
    }
    
    return domain;
}    