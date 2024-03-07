import React from 'react'

const Navbar = () => {
  return (
    <div className="nav">
          <div className="intro">
            <h3 className='intro_text'>Hello <span><img src="/hand.png" alt="" className='hand' /></span> I am <span className='name'> Anjali</span></h3>
          </div>
          <div className="email">
            <a href="mailto:anjalikum116@gmail.com"><h3 className='mail'><span><img src="/email.svg" alt="" /></span>anjalikum116@gmail.com</h3></a>
          </div>
        </div>
  )
}

export default Navbar