import "./styles.css"
import "./Components/Navbar.css"
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";

function App() {

  const [characters, setCharacters] = useState("")

  useEffect(() => {
      fetch('https://rickandmortyapi.com/api')
      .then(response => response.json())
      .then()
  },[])


  return (
    <>
    <Navbar />
    </>
  );
}

export default App;
