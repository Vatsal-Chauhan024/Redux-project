import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearProduct, deleteProduct } from '../userSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';



const Cart = () => {

  const selection = useSelector((state) => state.users)
  const dispatch = useDispatch()


  const handleRemove = (productId) => {
    toast.success('Product Removed Successfully!', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",

    });
    dispatch(deleteProduct(productId))
   
  }

  const handleCheckout = () =>{
    toast.info("Your Order is successfully placed", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    })
    toast.success("Thank you!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
    })
    dispatch(clearProduct())
  }

  return (
    <>
      <ToastContainer />
      <div className='flex flex-col items-center justify-evenly'>

        {
          selection.length>0 ? (

          

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-10 px-6'>
          {
            selection.map((items) => (
              <div key={items.id} className='border-2 border-solid flex flex-col justify-center items-center min-h-[350px] bg-slate-200 rounded-md shadow-xl w-72np'>
                <div className='flex flex-col box-border  justify-center items-center '>
                  <img src={items.image} alt="error-image" className='h-32' />
                  <h4 className='text-center text-xs my-2'>{items.title}</h4>
                  <h4 className='text-sm '>price: {items.price}$</h4> <h4 className='text-sm'>ratings: {items.rating.rate}/5</h4>
                  <button className='bg-red-500 text-white text-sm tracking-wide px-2 h-8 rounded-sm mt-4' onClick={() => handleRemove(items.id)} >
                    Remove
                  </button>
                </div>
              </div>
            ))
          }
        </div>
        ):(
          <>
          <p className='text-2xl my-[20vh] border-2 border-white bg-slate-800 h-20 text-white flex justify-center items-center px-8 rounded-lg drop-shadow-2xl'>No Products are yet Added to Cart....</p>
          <Link to ="/"><button className='bg-indigo-600 text-white text-base  h-12  px-5 rounded-md hover:bg-indigo-500'>Move to Home</button></Link>
          </>
        )
      }

        {selection.length > 0 && (
          <button className='bg-indigo-600 h-12 px-3 outline-none cursor-pointer text-white flex items-center justify-center tracking-wide rounded-md my-8 text-base hover:bg-indigo-500' onClick={handleCheckout}>
            Checkout
          </button>
        )}
      </div>
    </>
  )
}

export default Cart
