import React from 'react'
import Card from './Card'


export default function CardsContainer(props) {
  return (
    <div className="container">
        
        <div className="box-container">

          
          {props.characters.map(card => (
             <Card key={card.id} card={card} /> 
          ))}
            
                        
            
        </div>
        
    </div>
  )
}
