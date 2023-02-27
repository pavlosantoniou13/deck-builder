import React from 'react'

export default function DeckCards(props) {
  return (
    <div className="box" key={props.card.id}    card={props.card} name={props.card.name} >
      <img  src={props.card.image}  alt="" />
      <div className="name" onClick={props.toggleModal} id={props.card.name}  >
      <h3 className={props.card.name} >Name: {props.card.name}</h3>
      </div>
      <div className="delete-div">
        <button className='delete' id={props.card.name} onClick={props.removeCardFromDeck} >Remove</button>
      </div>
      
    </div>
  )
}
