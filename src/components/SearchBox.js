import { useContext, useState } from 'react'
import styled from 'styled-components'
import IconArrow from '../assets/iconArrow.svg'
import { MapContext } from '../context/MapContext'
import ReactLoading from 'react-loading'

const FormField = styled.form`
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
      width:104px;

      &:focus{
        outline:none;
        background: green;
        box-shadow:2px 2px 20px green
      }
  }


`

const SearchBox = () => {

    const  {setDomain,isLoading} = useContext(MapContext)

    const [ip, setIp] = useState('')

    const handleSubmit = e => {
      e.preventDefault()
      setDomain(ip)
    }


    const handleInputChange = e => {
      setIp(e.target.value)
    }

    return (
        <FormField onSubmit={handleSubmit}>
          <input onChange={handleInputChange} value={ip} placeholder='Busque por um IP ou Domínio' type="text" name="s" />
          
          <button type="submit" disabled={ip.length === 0 ? true : false}>
              {!isLoading && <img src={IconArrow} alt="" />}
              {isLoading && <ReactLoading color="white" type="bars" />}
          </button>
        </FormField>
    )
}

export default SearchBox