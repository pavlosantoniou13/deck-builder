import React from 'react'


export default function Navbar(props) {
  return (
    <nav className='navbar'>
        <div className="title" onClick={props.toggleForm} ><h1>Deck Builder</h1></div>
        <div className="Shuffle">
          <form action="input">
             <input type="text" className='input' placeholder='Search...'   />
          </form>
          <div className="btn"><button className='shuffle' onClick={props.shuffleCards} >{props.shuffleButton}</button></div>
        </div>
    </nav>
  )
}
