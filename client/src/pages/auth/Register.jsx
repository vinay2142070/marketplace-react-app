import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/Register.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { register } from '../../actions/auth'

const RegisterForm = () => {

    const state = useSelector((state) => state)

    const [name, setName] = useState('test')
    const [email, setEmail] = useState('test@gmail.com')
    const [password, setPassword] = useState('test7540')


    const navigate = useNavigate()


    const onChangeHandler = (e) => {

        switch (e.target.id) {
            case 'name':
                setName(e.target.value)
                break;

            case 'email':
                setEmail(e.target.value)
                break;

            case 'password':
                setPassword(e.target.value)
                break;

            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const resp = await register({ name, email, password })

            toast.success(resp.data)
            navigate('/login')

        } catch (err) {
            console.log(err);
            if (err.response.status == 400) toast.error(err.response.data)

        }

    }



    return (
        <div>
            <div className='container'>
                <div className={styles.card}>
                    <h1>Register</h1>
                    <p>Please register for hotel booking!!!</p>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label htmlFor="">
                            Name</label>
                        <input type="text" name='name' id='name' onChange={onChangeHandler} value={name} />
                        <label htmlFor="">
                            Email</label>
                        <input type="email" name='email' id='email' onChange={onChangeHandler} value={email} />
                        <label htmlFor="">
                            Password</label>
                        <input type="password" name='password' id='password' onChange={onChangeHandler} value={password} />
                        <button className='btn btn-primary' type='submit'>
                            Submit
                        </button>
                    </form></div>
            </div>
        </div >
    )

}

export default RegisterForm