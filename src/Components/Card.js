import React from 'react'

export default function Cards(props) {
  return (
    <div className="box" key={props.card.id}    card={props.card} >
      <img  src={props.card.name}  alt="" />
      <h3>{props.card.Name}</h3>
    </div>
  )
}
