import React from 'react'
import DeckCards from './DeckCards'


export default function DeckBar(props) {

    const cutcharacters = props.deckCards.slice(0,8)

  return (
    <div className="deck" onDragOver={(e) => props.draggingOver(e)} onDrop={(e)=> props.dragDropped(e)}  >
        <div className="deck-title">Your Deck</div>
        <div className="deck-box-container">
            
          
          {cutcharacters.map(card => (
             <DeckCards key={card.id} card={card} toggleModal={props.toggleModal} removeCardFromDeck={props.removeCardFromDeck} /> 
          ))}
            
                        
            
        </div>
        
    </div>
  )
}
