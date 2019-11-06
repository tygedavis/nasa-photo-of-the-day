import React, {useState, useEffect} from "react";
import Heading from "./components/Heading"
import Image from "./components/body-components/Image"
import axios from "axios";
import "./App.css";

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
      <div className="App">
        <Heading/>
        <div className='image-div'>
          <Image key={data} url={data.hdurl}/>
        </div>
      </div>
    );
}

export default App;
