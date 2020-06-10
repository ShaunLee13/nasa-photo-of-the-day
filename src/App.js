import React from "react";
import "./App.css";
import axios from 'axios'
import { nasaURL, apiKey } from './constants'

axios.get(`${nasaURL}?api_key=${apiKey}`)
  .then(res => {
    console.log(`Here is your results: ${res}`)
    debugger
  })
  .catch(err => {
    console.log(err)
    debugger
  })

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
