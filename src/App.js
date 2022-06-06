import './App.css';
import Contador from './components/Contador';
import { createGlobalStyle } from 'styled-components'

function App() {

  const GlobalStyle = createGlobalStyle`
    body {
      background-image: linear-gradient(180deg, #f7ff7d 0, #deff74 16.67%, #c0f969 33.33%, #9deb5c 50%, #77dd51 66.67%, #4dd24c 83.33%, #00c94d 100%); 
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
