import "./styles.css"
import "./Components/Navbar.css"
import "./Components/Modal.css"
import "./Components/DeckBar.css"
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Axios from "axios";
import CardsContainer from "./Components/CardsContainer";
import Modal from "./Components/Modal";
import DeckBar from "./Components/DeckBar";


function App() {

  const [characters, setCharacters] = useState([])
  const [isItemLoading, setIsItemLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalInfo, setModalInfo] = useState([])

  const getApi = () => {
  Axios.get("https://rickandmortyapi.com/api/character").then((response) => {
    const shuffledapi = [...response.data.results].sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
    
     setCharacters(shuffledapi)
    
    })
  }

 useEffect(() => {
  getApi()
 },[])
 
 
 

 const shuffleCards = () => {
  const shuffledcards = [...characters]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({ ...card, id: Math.random() }))

  setCharacters(shuffledcards)
  
 }

 const toggleModal = (e) => {
    setModal(!modal)
    console.log(e.target.className)
    for(let i = 0; i < characters.length; i++) {
      if(e.target.className === characters[i].name){
        setModalInfo(characters[i])
      }
    }
 }
 


 console.log(modalInfo)


  return (
    <>
    <Navbar shuffleCards={shuffleCards} />
    <DeckBar characters={characters} />
    <CardsContainer characters={characters} toggleModal={toggleModal} />
    <Modal toggleModal={toggleModal} modal={modal} modalInfo={modalInfo} />
    </>
  );
}

export default App;
