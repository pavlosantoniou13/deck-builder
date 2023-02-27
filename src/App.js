import "./styles.css"
import "./Components/Navbar.css"
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Axios from "axios";
import CardsContainer from "./Components/CardsContainer";

function App() {

  const [characters, setCharacters] = useState([])
  const [isItemLoading, setIsItemLoading] = useState(false)

 const getApi = () => {
  Axios.get("https://rickandmortyapi.com/api/character").then((response) => {
  setCharacters(response.data.results)
  })
 }

 useEffect(() => {
  getApi()
 },[])
 
 console.log(characters)


  return (
    <>
    <Navbar />
    <CardsContainer characters={characters} />
    </>
  );
}

export default App;
