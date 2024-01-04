import React from 'react'
//import Logo from './assets/sb.jpeg'
const Navigation = () => {
  return (
    <div>
      <nav className='container'>
          <div className="logo">
            <img src="download.png" className='img01' alt="logo" />
          </div>

          <ul>
            <li href="#">Menu</li>
            <li href="#">About</li>
            <li href="#">Contact Us</li>
            <li href="#">Reviews</li>
          </ul>

          <button>Login</button>
        </nav>
    </div>
  )
}

export default Navigation;
