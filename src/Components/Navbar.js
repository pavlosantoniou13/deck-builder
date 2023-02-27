import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="title"><h1>Deck Builder</h1></div>
        <div className="Shuffle">
          <button className='shuffle' >Shuffle</button>
        </div>
    </nav>
  )
}
