import React, {useState, useEffect} from "react";
import Heading from "./components/Heading"
import Image from "./components/body-components/Image"
import axios from "axios";
import styled from 'styled-components';
import "./App.css";

const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=pDlfBcC5P5gf9EgXHQoRJydWMxdMxvHzpDnaBtKi')
    .then(res => {
        console.log(res.data)
        setData(res.data)
    })
    .catch(err => {
        console.log('There was an error in the Axios call: ', err)
    })
    }, [])

    return (
      <BodyDiv>
        <Heading/>
        <Image key={data} title={data.title} url={data.hdurl} explanation={data.explanation} date={data.date}/>
      </BodyDiv>
    );
}

export default App;
