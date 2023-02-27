import React, { useState } from 'react'

export default function Modal(props) {

    

  return (
    <>
    {props.modal && (
    <div className="modal">
        <div className="overlay" onClick={props.toggleModal} ></div>
        <div className="modal-content">
            <h2>Heloo modal</h2>
            <p>blablalalalaalalla</p>
            <button className='close' onClick={props.toggleModal} >Close</button>
        </div>
    </div>  
    )}
   
    </>
  )
}
