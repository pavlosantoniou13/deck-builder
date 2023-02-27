import React from 'react'
import DeckCards from './DeckCards'

export default function DeckBar(props) {

    const cutcharacters = props.characters.slice(0,10)

  return (
    <div className="deck">
        <div className="deck-title">Your Deck</div>
        <div className="deck-box-container">
            
          
          {cutcharacters.map(card => (
             <DeckCards key={card.id} card={card} toggleModal={props.toggleModal} /> 
          ))}
            
                        
            
        </div>
        
    </div>
  )
}
