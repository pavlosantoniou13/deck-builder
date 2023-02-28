import "./styles.css"
import "./Components/Navbar.css"
import "./Components/Modal.css"
import "./Components/DeckBar.css"
import "./Components/Form.css"
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import Axios from "axios";
import CardsContainer from "./Components/CardsContainer";
import Modal from "./Components/Modal";
import DeckBar from "./Components/DeckBar";
import Form from "./Components/Form";

//Save Deck of Characters in local storage
const deckFromLocalStorage = JSON.parse(localStorage.getItem("deck") || '[]')

function App() {

  const [characters, setCharacters] = useState([])
  const [modal, setModal] = useState(false)
  const [modalInfo, setModalInfo] = useState([])
  const [deckCards, setDeckCards] = useState(deckFromLocalStorage)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [shuffleButton, setShuffleButton] = useState("Shuffle")
  const [form, setForm] = useState(false)
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    status: "",
    species: "",
    location: "",
    image: "",
  })
  const [mainCharacters, setMainCharacters] = useState([])
  

  

  //everytime deckCards get updated local storage gets updated to with the new deckCards object
  useEffect(() => {
    localStorage.setItem("deck",JSON.stringify(deckCards))
  },[deckCards])

  //Fetchs the Characters API and shuffles it for the first display of everytime the page gets refreshed
  const getApi = () => {
  Axios.get("https://rickandmortyapi.com/api/character").then((response) => {
    const shuffledapi = [...response.data.results].sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
    
     setCharacters(shuffledapi)
     setMainCharacters(shuffledapi)
    
    })
  }


  //Runs the function that Fetches the API
 useEffect(() => {
  getApi()
 },[])
 
 
 
 //Triggered by the Shuffle button located in the navbar, Shuffles the cards and sets a timer so the user has to wait 15 seconds before he can shuffle again.
 const shuffleCards = () => {

  if(btnDisabled === false) {
    const shuffledcards = [...characters]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
  
    setCharacters(shuffledcards)
    setBtnDisabled(true);
    setShuffleButton("Shuffling...")
  }
  
  setTimeout(() => {
    setBtnDisabled(false)
    setShuffleButton("Shuffle")
  }, 15000)
  
 }


 //Triggered by all of the cards in the CardsContainer, checks if the cards name that got clicked matches any of the cards arleady in the deck.
 //if it does then it doesnt add it and if it doesnt it does add it
 const addDeckCard = (e) => {
  for(let i = 0; i < characters.length; i++) {
    if(e.target.id === characters[i].name && !deckCards.includes(characters[i])){
      let character = characters[i]
      setDeckCards((prevDeck) => [...prevDeck, character])
      
    }
  }
 }

 

 

 //Triggered by the Delete button that every card that is on the deck has. Filters through the array and finds the card that the user picked and creates a new array that does not contain that card.
 const removeCardFromDeck = (e) => {
  const newDeck = deckCards.filter((card) => card.name !== e.target.id)
  setDeckCards(newDeck)

 }

 

 //Triggerd by the name of each card, Shows the details of the card pressed.
 // works with a boolean if false modal is closed and if its true modal is up
 const toggleModal = (e) => {
    setModal(!modal)
    for(let i = 0; i < characters.length; i++) {
      if(e.target.className === characters[i].name){
        setModalInfo(characters[i])
      }
    }
 }
 
//same logic as modal
 const toggleForm = () => {
  setForm(!form)
  
}

 
//Gets the values from the form and creates a new character with the setNewCharacter
const addNewCharacter = (e) => {
  e.preventDefault()
  const name = e.target.name
  const value = e.target.value
  setNewCharacter((prev) => {
    return { ...prev, [name]: value}
  })
  
}

//this is triggered by the add button and it finally adds the new Character in the deck
const addNewCharacterToDeck = () => {
  setDeckCards((prevDeck) => [...prevDeck, newCharacter])
}

//if inoput doesnt exist then we set tha characters back to its original state.
//if not we initialize a variable called input that contains the users input we capitalize the first letter and then we change the characters array based on the resultsArray.
const handleSearchChange = (e) => {
  if(!e.target.value) {
    return setCharacters(mainCharacters)
  }
  
  let input = e.target.value

  input = input.charAt(0).toUpperCase() + input.slice(1)

  const resultsArray = characters.filter(character => character.name.includes(input))

  setCharacters(resultsArray)
}

 //gets the id from the item that is dragged and sets the datatransfer accordingly
const dragStarted = (e, id) => {
  id = e.target.id
  console.log(id)
  e.dataTransfer.setData("characterToMove",id)
}
//prevents the spamming that would happen while hovering over
const draggingOver = (e) => {
  e.preventDefault()
}

//initialize a variable and store the data that we got from dragStarted that got transefered
//then check if the card exists and also if it has arleady been added,then it gets added
const dragDropped = (e) => {
  console.log("droped")
  let transferedCharacter = e.dataTransfer.getData("characterToMove")
  
  for(let i = 0; i < characters.length; i++) {
    if(transferedCharacter === characters[i].name && !deckCards.includes(characters[i])){
      let character = characters[i]
      setDeckCards((prevDeck) => [...prevDeck, character])
      
    }
  }
}
  

  return (
    <>
    <Navbar shuffleCards={shuffleCards} shuffleButton={shuffleButton} toggleForm={toggleForm} handleSearchChange={handleSearchChange}  />
    <DeckBar deckCards={deckCards}  removeCardFromDeck={removeCardFromDeck} draggingOver={draggingOver} dragDropped={dragDropped} />
    <CardsContainer characters={characters} toggleModal={toggleModal} addDeckCard={addDeckCard} dragStarted={dragStarted}  />
    <Modal toggleModal={toggleModal} modal={modal} modalInfo={modalInfo} />
    <Form form={form} toggleForm={toggleForm} addNewCharacter={addNewCharacter} addNewCharacterToDeck={addNewCharacterToDeck} />
    </>
  );
}

export default App;
