import { useState } from 'react'
import styled from 'styled-components'
import IconArrow from '../assets/iconArrow.svg'

const FormField = styled.div`
  display:flex;
  flex-flow: row nowrap;
  justify-content:center;
  align-items:center;

  input {
      padding:10px;
      border-color:transparent;
      max-width: 100vw;
      width: 80vw;
      height: 80px;
      border-radius:  var(--borderRadius) 0 0 var(--borderRadius); 
      transition: all linear 0.2s;
      
      &:focus{
        outline:none;
      }

      &:focus + button{
        outline:none;
        background: purple;
        border:none;
        box-shadow:2px 2px 10px purple
      }

  }

  button{
      padding:10px 20px;
      background-color:var(--primary);
      border:none;
      border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
      height:80px;
      transition: all linear 0.2s;
      margin-left: -3px;

      &:focus{
        outline:none;
        background: green;
        box-shadow:2px 2px 20px green
      }
  }


`

const SearchBox = () => {

    const [busca, setBusca] = useState('')

    const searchIp = event => {

        if(busca === ''){
            console.log('Por favor informe um IP ou dominio')
            return;
        }

        console.log('Aguarde carregando mapa')
    }

    const changeInput = event => {
        setBusca(event.target.value)
    }

    return (
        <FormField>
        <input value={busca} onChange={changeInput} placeholder='Busque por um IP ou Domínio' type="text" name="s" />
        <button type="button" onClick={searchIp}>
            <img src={IconArrow} alt="" />
        </button>
        </FormField>
    )
}

export default SearchBox;