import React from 'react'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <Link to={'/'} className=' flex items-center gap-1 cursor-pointer'>
      <h3 className=' text-red-500 font-bold capitalize text-xl'>World <span className=' text-yellow-500 capitalize'>Travel</span></h3>
    </Link>
  )
}

export default Logo