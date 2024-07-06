import React from 'react'


const Button = ({onClick, children}) => {


  return (
    <div>
      <button className='bg-indigo-500 text-white text-sm tracking-wide px-2 h-8 rounded-sm mt-4' onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
