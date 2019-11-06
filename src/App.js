import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState({})

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=pDlfBcC5P5gf9EgXHQoRJydWMxdMxvHzpDnaBtKi')
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log('There was an error in the Axios call: ', err)
  })
}, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role='img' aria-label='rocket emoji'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
