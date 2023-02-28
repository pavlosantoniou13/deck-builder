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

const deckFromLocalStorage = JSON.parse(localStorage.getItem("deck") || '[]')

function App() {

  const [characters, setCharacters] = useState([])
  const [isItemLoading, setIsItemLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalInfo, setModalInfo] = useState([])
  const [deckCards, setDeckCards] = useState(deckFromLocalStorage)
  const [btnDisabled, setBtnDisabled] = useState(false)

  useEffect(() => {
    localStorage.setItem("deck",JSON.stringify(deckCards))
  },[deckCards])


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


  if(btnDisabled === false) {
    const shuffledcards = [...characters]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
  
    setCharacters(shuffledcards)
    setBtnDisabled(true);
  }
  
  setTimeout(() => {
    setBtnDisabled(false)
  }, 15000)
  
 }


 const addDeckCard = (e) => {
  for(let i = 0; i < characters.length; i++) {
    if(e.target.id === characters[i].name && !deckCards.includes(characters[i])){
      let character = characters[i]
      setDeckCards((prevDeck) => [...prevDeck, character])
      
    }
  }
 }

 

 

 const removeCardFromDeck = (e) => {
  console.log(e.target.id)
  const newDeck = deckCards.filter((card) => card.name !== e.target.id)
  setDeckCards(newDeck)

 }

 


 const toggleModal = (e) => {
    setModal(!modal)
    for(let i = 0; i < characters.length; i++) {
      if(e.target.className === characters[i].name){
        setModalInfo(characters[i])
      }
    }
 }
 

 

console.log(deckCards)
 


  return (
    <>
    <Navbar shuffleCards={shuffleCards} />
    <DeckBar deckCards={deckCards}  removeCardFromDeck={removeCardFromDeck} />
    <CardsContainer characters={characters} toggleModal={toggleModal} addDeckCard={addDeckCard}  />
    <Modal toggleModal={toggleModal} modal={modal} modalInfo={modalInfo} />
    </>
  );
}

export default App;
