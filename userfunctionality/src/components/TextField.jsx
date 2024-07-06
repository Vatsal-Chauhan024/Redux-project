import React from 'react'

const TextField = ({label, inputProps, onChange, value}) => {
  return (
    <div className='flex flex-col mx-3 mt-6'>
      <label htmlFor="">{label}</label>
      <input className='w-80 outline-none h-12 bg-slate-300 rounded-sm my-2 px-2' 
      
      {...inputProps}
      onChange={onChange}
      value={value}
      />
    </div>
  )
}

export default TextField
