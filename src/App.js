import styled from 'styled-components'
import BoxMap from './components/BoxMap'
import Painel from './components/Panel'
import SearchBox from './components/SearchBox'
import MapProvider from './providers/MapProvider'

const Background = styled.div`
  background: #4949a7 url('/pattern-bg.png') no-repeat left top;
  background-size: cover;
  width: 100%;
  height:100vh;
  display:flex;
`

const Map = styled.div`
  width:100%;
  display:flex;
  max-height:100%;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;

  h1 {
    color: var(--contrastText);
    margin: 50px  0 50px 0;
  }

`

function App() {

  return (
      <MapProvider>
        <Background>
            <Map>
              <h1>IP TRACKER</h1>
              <SearchBox />
              <Painel />
              <BoxMap />
            </Map>
        </Background>
      </MapProvider>
    
  )
}

export default App;
