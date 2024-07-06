import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {BiLogoDrupal} from "react-icons/bi"
import {BsFillCartCheckFill} from "react-icons/bs"
import {AiTwotoneHome} from "react-icons/ai"


const Navbar = () => {

    const  selector = useSelector((state) => state.users)

  return (
   <div className="flex bg-violet-300 justify-between px-5 sm:px-16 items-center min-h-[60px] mb-7 shadow-2xl ">
    <div>
        <Link to ="/"><h3 className='text-slate-800 cursor-pointer flex justify-center items-center'><BiLogoDrupal className='text-2xl'/><span className='px-2'>Almery Market</span></h3></Link>
    </div>

    <div className='flex justify-center items-center'>
    <Link to ="/"><h3><AiTwotoneHome className='text-2xl mx-7 sm:mx-9 outline-none'/></h3></Link>
    <Link to ="/cart"><span className="cartCount cursor-pointer flex justify-center items-center"><BsFillCartCheckFill className='text-2xl outline-none'/>: {selector.length} </span></Link>
    </div>
   </div>
  )
}

export default Navbar
