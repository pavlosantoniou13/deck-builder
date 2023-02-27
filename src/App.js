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
  const [deckCards, setDeckCards] = useState([])

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


 const addDeckCard = (e) => {
  console.log(e.target.id)
  for(let i = 0; i < characters.length; i++) {
    if(e.target.id === characters[i].name){
      let character = characters[i]
      setDeckCards((prevDeck) => [...prevDeck, character])
    }
  }
 }



 const toggleModal = (e) => {
    setModal(!modal)
    for(let i = 0; i < characters.length; i++) {
      if(e.target.className === characters[i].name){
        setModalInfo(characters[i])
      }
    }
 }
 

 


 


  return (
    <>
    <Navbar shuffleCards={shuffleCards} />
    <DeckBar deckCards={deckCards} />
    <CardsContainer characters={characters} toggleModal={toggleModal} addDeckCard={addDeckCard}  />
    <Modal toggleModal={toggleModal} modal={modal} modalInfo={modalInfo} />
    </>
  );
}

export default App;
