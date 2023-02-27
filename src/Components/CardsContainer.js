import React from 'react'
import Card from './Card'


export default function CardsContainer(props) {

  const cutcharacters = props.characters.slice(0,10)


  return (
    <div className="container">
        
        <div className="box-container">

          
          {cutcharacters.map(card => (
             <Card key={card.id} card={card} /> 
          ))}
            
                        
            
        </div>
        
    </div>
  )
}
