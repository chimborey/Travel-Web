import React from 'react'
import { Link } from 'react-router-dom'
import CKC from '../../assets/CkC.jpg'
const Logo = () => {
  return (
    <Link to={'/'} className=' flex items-center gap-1 cursor-pointer'>
      <img src={CKC} alt="" className=' w-9 h-9 rounded-full'/>
      <h3 className=' text-red-500 font-bold capitalize text-xl'>World <span className=' text-yellow-500 capitalize'>Travel</span></h3>
    </Link>
  )
}

export default Logo