import React, { useState } from 'react'
import TextField from './components/TextField'
import Button from './components/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from './UserSlice'
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {

    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = () =>{
        setValues({
            name: '',
            email: ''
        })
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }))
        console.log(values)
        navigate('/')
    }
  return (
    <div>
        <TextField
        label="Name"
        value={values.name}
        onChange={(e)=> {setValues({...values, name:e.target.value})}}
        inputProps = {
            {type: "text", placeholder: "John Doe"}
        }
        />

        <TextField 
        label="Email"
        value={values.email}
        onChange={(e)=>{setValues({...values, email:e.target.value})}}
        inputProps={
            {
                type: "email", placeholder: "john@gmail.com"
            }
        }
        />

        <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default AddUser
