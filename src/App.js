import './App.css';
import Contador from './components/Contador';
import { createGlobalStyle } from 'styled-components'

function App() {

  const GlobalStyle = createGlobalStyle`
    body {
      background-image: linear-gradient(135deg, #fcfeff 0, #daecf6 25%, #b7d9ee 50%, #94c5e6 75%, #73b3e0 100%); 
      ${'' /* display: flex;
      justify-content: center;
      align-items: center; */}
    }
  `


  return (
    <div className="App">
      <GlobalStyle whiteColor />
      <Contador />
    </div>
  );
}

export default App;
