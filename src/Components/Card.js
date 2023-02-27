import React from 'react'

export default function Cards(props) {

  

  return (
    <div className="box" key={props.card.id}    card={props.card} onClick={props.toggleModal} >
      <img  src={props.card.image}  alt="" />
      <h3>Name: {props.card.name}</h3>
      <h3> status: {props.card.status}</h3>
      <h3> Species: {props.card.species}</h3>
      <h3> Origin: {props.card.origin.name}</h3>
      <h3> Location: {props.card.location.name}</h3>



    </div>
  )
}
