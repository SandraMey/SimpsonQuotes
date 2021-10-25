import DisplaySimpson from './components/DisplaySimpson';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

const quoteCard = {
  quote: "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
  character: 'Lisa Simpson',
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
  characterDirection: 'Right',
}


function App() {

  const [simpson, setSimpson] = useState(quoteCard);

  const getSimpson= () => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    // Extract the DATA from the received response
    .then((response) => response.data)
    .then((data) => {
      console.log(data);
      setSimpson(data[0]);
    });
  };


  return (
    <div className="App">
      <DisplaySimpson simpson={simpson} />
      <button type="button" onClick={getSimpson}>Get Quote</button>
    </div>
  );
}

export default App;
