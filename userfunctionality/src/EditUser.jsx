import React, { useState } from 'react'
import TextField from './components/TextField'
import Button from './components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { editUser } from './UserSlice'

const EditUser = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    
    const existingUser = users.filter(user => user.id === params.id);
    const { name, email } = existingUser[0];
    const [values, setValues] = useState({
      name,
      email
    });
    const navigate = useNavigate()

    const handleEdit = () => {
        setValues({
            name: '',
            email: ''
        })
        dispatch(editUser({
            id: params.id,
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
                onChange={(e) => { setValues({ ...values, name: e.target.value }) }}
                inputProps={
                    { type: "text", placeholder: "John Doe" }
                }
            />

            <TextField
                label="Email"
                value={values.email}
                onChange={(e) => { setValues({ ...values, email: e.target.value }) }}
                inputProps={
                    {
                        type: "email", placeholder: "john@gmail.com"
                    }
                }
            />

            <Button onClick={handleEdit}>Edit</Button>
        </div>
    )
}

export default EditUser
