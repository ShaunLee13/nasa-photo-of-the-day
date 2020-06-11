import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { nasaURL, apiKey } from './constants'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ImageDisplay from './components/ImageDisplay'
import { Container, Divider } from 'semantic-ui-react'



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
    <Container text className='App'>
      <Header />
      <SearchBar/>
      <Divider />
      <ImageDisplay data={pixData}/>
      <Divider />
      <p>Starviewer Copyright 2020 Shaun Lee </p>
    </Container>
  );
}

export default App;
