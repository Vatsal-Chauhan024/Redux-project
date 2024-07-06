import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineEdit } from "react-icons/ai"
import Button from './components/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUser } from './UserSlice';




const Parent = () => {

    const userDetails = useSelector((store) => store.users)
    console.log(userDetails)
    const dispatch = useDispatch()

    const handleRemove = (id) =>{
        dispatch(deleteUser(id))
    }




    return (
        <div>
            <Link to = "/add-user">
            <Button>Add User</Button>
            </Link>
            <div className='' >
                {
                    userDetails.map((elem) => {
                        return (
                            <div className='flex items-center' key={elem.id}>
                                <div className="w-80 text-slate-600 h-14 items-center flex">
                                <span className='px-4'>{elem.name}</span>
                                <span>{elem.email}</span>
                                </div>
                                
                                    <Link to = {`edit-user/${elem.id}`}>
                                    <button className='text-2xl'><AiOutlineEdit /></button>
                                    </Link>
                                    <button onClick={handleRemove} className='text-2xl px-3'><CiCircleRemove /></button>
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}

export default Parent
