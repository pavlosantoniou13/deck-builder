import React from 'react'

export default function Form(props) {
  return (
    <>
    {props.form && (
    <div className="modal">
        <div className="overlay" onClick={props.toggleForm} ></div>
        <div className="modal-content">
                <form className='form' >
                    
                    <div className="upper">
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" placeholder='First Name...' required
                             id="name"  />   
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" placeholder='Last Name...' required 
                         id="lastName"  />
                        </div>
                    </div> 
                    <div className="lower">  
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Email...' required 
                         id="email"  />
                        </div>
                        <div className="phone">
                            <label htmlFor="phone">Phone number</label>
                            <input type="number" placeholder='(00)+ 123-456-789' required
                            onChange={props.handleChange} id="phone" value={props.phone} />
                        </div>
                    </div>  
                    
                </form>

         <button className='close' onClick={props.toggleForm} >Close</button>
        </div>
    </div>  
    )}
   
    </>
  )
}
