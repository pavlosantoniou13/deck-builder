import React from 'react'

export default function Navbar(props) {
  return (
    <nav className='navbar'>
        <div className="title"><h1>Deck Builder</h1></div>
        <div className="Shuffle">
          <button className='shuffle' onClick={props.shuffleCards} >Shuffle</button>
        </div>
    </nav>
  )
}
