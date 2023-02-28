import React from 'react'

export default function Form(props) {
  return (
    <>
    {props.form && (
    <div className="modal">
        <div className="overlay" onClick={props.toggleForm} ></div>
        <div className="modal-content">
                <form className='form' onSubmit={props.addNewCharacter} >
                    
                    <div className="upper">
                        <div className="name">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder='Name...' required
                             id="name" onChange={props.addNewCharacter} name='name'  />   
                        </div>
                        <div className="status">
                            <label htmlFor="status">Status: Dead/Alive</label>
                            <input type="text" placeholder='Status...' required 
                         id="status" onChange={props.addNewCharacter} name='status'  />
                        </div>
                    </div> 
                    <div className="lower">  
                        <div className="species">
                            <label htmlFor="species">Species</label>
                            <input type="text" placeholder='Species...' required 
                         id="species" onChange={props.addNewCharacter} name='species' />
                        </div>
                        <div className="location">
                            <label htmlFor="location">Location</label>
                            <input type="text" placeholder='Location...' required
                            id='location' onChange={props.addNewCharacter} name="location" />
                        </div>
                       
                    </div>  
                    <div className="lower">  
                        <div className="image">
                            <label htmlFor="image">Image</label>
                            <input type="url" placeholder='Enter URL Here...' required
                            id='image' onChange={props.addNewCharacter} name='image' />
                        </div>
                        <div className="origin">
                            <label htmlFor="origin">Origin</label>
                            <input type="text" placeholder='Origin...' required
                            id='origin' onChange={props.addNewCharacter} name='origin' />
                        </div>
                    </div>  
                    
                    <button className='add' onClick={props.addNewCharacterToDeck} >Add</button>
                </form>

            <div className="close-div">
                <button className='close' onClick={props.toggleForm} >Close</button>
            </div>
        </div>
    </div>  
    )}
   
    </>
  )
}
