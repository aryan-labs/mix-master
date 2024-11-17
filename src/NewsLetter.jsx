import React from 'react'
import './index.css'

const NewsLetter = () => {
  return (
    <div className='NewsLetter-form'>
      <form>
        <div className='heading'>
        <h1>Our NewsLetter</h1>
        </div>
        <div className='newsLetter name'>
          <p>Name</p>
          <input type='text'/> 
        </div>
        <div className='newsLetter lastname'>
          <p>Last Name</p>
          <input type='text'/> 

        </div>
        <div className='newsLetter email'>
          <p>Email</p>
          <input type='text'/> 

        </div>
        <button className='submit-but'>Submit</button>
      </form>
    </div>
  )
}

export default NewsLetter
