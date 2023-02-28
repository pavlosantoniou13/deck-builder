import React from 'react'

export default function Modal(props) {

    

  return (
    <>
    {props.modal && (
    <div className="modal">
        <div className="overlay" onClick={props.toggleModal} ></div>
        <div className="modal-content">
            <img  src={props.modalInfo.image}  alt="" />
            <h3>Name: {props.modalInfo.name}</h3>
            <h3> status: {props.modalInfo.status}</h3>
            <h3> Species: {props.modalInfo.species}</h3>
            <h3> Origin: {props.modalInfo.origin.name}</h3>
            <h3> Location: {props.modalInfo.location.name}</h3>
            <h3> Species: {props.modalInfo.species}</h3>
            <h3> Gender: {props.modalInfo.gender}</h3>
            <h3> Episodes: {props.modalInfo.episode.length}</h3>

            <button className='close' onClick={props.toggleModal} >Close</button>
        </div>
    </div>  
    )}
   
    </>
  )
}
