import React, { useEffect, useState } from 'react'
import Button from './Button';
import {useDispatch} from "react-redux"
import { addProduct } from '../userSlice';
import { ToastContainer, toast } from 'react-toastify';

const Product = () => {
  const dispatch  = useDispatch()

    const [products, setProducts] = useState([]);

    useEffect(()=>{
      const fetchProducts = async() => {
        const backendRes = await fetch("https://fakestoreapi.com/products")
        const backendProducts = await backendRes.json()


        setProducts(backendProducts)
    }

    fetchProducts();
    }, [])

  
    const addProducts = (items) =>{
      toast.success('Product Added Successfully!', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
      });

      

      dispatch(addProduct(items))
    }






  return (
    <>
    <ToastContainer/>
  <div className='flex justify-evenly items-center py-4'>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-fit gap-y-16 gap-x-10 px-6'>
      {
        products.map((items)=>(
          <div key={items.id} className='border-2 border-solid flex flex-col justify-center items-center min-h-[350px] rounded-md bg-slate-200 shadow-xl'>
            <div className='flex flex-col box-border px-4 justify-center items-center'>
            <img src={items.image} alt="error-image" className='h-32'/>
            <h4 className='text-center text-xs my-2'>{items.title}</h4>
            <h4 className='text-sm '>price: {items.price}$</h4> <h4 className='text-sm'>ratings: {items.rating.rate}/5</h4>
            <Button onClick={() => addProducts(items)}>Add to Cart</Button>
            </div>
          </div>
        ))
      }
    </div>

        
  </div>
      </>
  )
}

export default Product
