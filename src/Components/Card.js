import React from 'react'

export default function Cards(props) {

  

  return (
    <div className="box" key={props.card.id}    card={props.card} name={props.card.name} >
      <img  src={props.card.image}  alt="" />
      <div className="name" onClick={props.toggleModal} id={props.card.name}  >
      <h3 className={props.card.name} >Name: {props.card.name}</h3>
      </div>
      <h3> status: {props.card.status}</h3>
      <h3> Species: {props.card.species}</h3>
      <h3> Origin: {props.card.origin.name}</h3>
      <h3> Location: {props.card.location.name}</h3>



    </div>
  )
}
