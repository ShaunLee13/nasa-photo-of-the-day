import React, { useState } from "react";
import "./App.css";
import axios from 'axios'
import { nasaURL, apiKey } from './constants'
import Header from './components/Header'


function App() {
  const [pixData, setPixData ] = useState(null)

  // axios.get(`${nasaURL}?api_key=${apiKey}`)
  // .then(res => {
  //   console.log(`Here is your results: ${res}`)
  //   setPixData(res.data)
  //   debugger
  // })
  // .catch(err => {
  //   console.log(err)
  //   debugger
  // })

  return (
    <div className="App">
      <Header />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
