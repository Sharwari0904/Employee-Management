import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex gap-6 text-lg'>
        <Link to='/home'>Home   </Link>
        <Link to='/register'>Register   </Link>
        <Link to='/login'>Login    </Link>
      </nav>
    </div>
  )
}

export default Navbar
