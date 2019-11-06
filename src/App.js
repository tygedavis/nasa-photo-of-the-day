import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState()

useEffect(() => {
  axios.get()
}, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
