import React from 'react'

export default function Cards(props) {
  return (
    <div className="box" key={props.card.id}    card={props.card} >
      <img  src={props.card.image}  alt="" />
      <h3>{props.card.name}</h3>
    </div>
  )
}
