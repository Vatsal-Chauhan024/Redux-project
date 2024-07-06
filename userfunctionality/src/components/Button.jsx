import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <div>
      <button className='bg-indigo-600 text-white hover:bg-indigo-400 m-4 w-20 h-10 text-base rounded-sm' onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button
