import React, { useContext } from 'react'
import styled from 'styled-components'
import { MapContext } from '../context/MapContext'



const PainelBox = styled.div`
    position:relative;
    background: var(--contrastText);
    border-radius: var(--borderRadius);
    display:flex;
    flex-flow: column;
    color: var(--primary);
    position: relative;
    top: 100px;
    z-index: 9990;
    border: solid 1px var(--primary);
    align-items: center;
    justify-content: space-between;

    .painel {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items:center;
        padding: 20px;
    }

    .listas {
        flex:1;
        padding: 10px 40px;
        margin: 10px;
        border-left:solid 1px #ebebeb;
        align-self:stretch;

        .lista-title{
            color: #666;
            text-transform:uppercase;
            font-weight: bolder;
        }
        h2 {
            padding: 0;
        }        

        &:first-child{
            border: none;
        }
    }

    

`


const Painel  = () => {

    const {dados} = useContext(MapContext)

    return (
        <PainelBox>
          {dados && <div className="painel">
            <div className="listas">
                <p className="lista-title">IP ADDRESS</p>
                <h2>{`${dados.ip}`}</h2>
            </div>

            <div className="listas">
                <p className="lista-title">Location</p>
                <h2>{`${dados.location.region}, ${dados.location.city} - ${dados.location.country}`}</h2>
            </div>

            <div className="listas">
                <p className="lista-title">ISP</p>
                <h2>{`${dados.isp}`}</h2>
            </div>
           </div>}
        </PainelBox>
    )

}

export default Painel