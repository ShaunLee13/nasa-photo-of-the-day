import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { nasaURL, apiKey } from './constants'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ImageDisplay from './components/ImageDisplay'



function App() {
  const [pixData, setPixData ] = useState('')

  useEffect(() => {
    axios.get(`${nasaURL}?api_key=${apiKey}`)
    .then(res => {
     setPixData(res.data)
    })
    .catch(err => {
      console.log(err)
      debugger
    })
  },[])

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <ImageDisplay data={pixData}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <p>Starviewer Copyright 2020 Shaun Lee </p>
    </div>
  );
}

export default App;
