import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from '../../styles/Register.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login } from '../../actions/auth'


const LoginForm = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('test@gmail.com')
    const [password, setPassword] = useState('test7540')


    const navigate = useNavigate()


    const onChangeHandler = (e) => {

        switch (e.target.id) {

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
            const resp = await login({ email, password })


            dispatch({
                type: "LOGIN",
                payload: resp.data
            })

            window.localStorage.setItem('auth', JSON.stringify(resp.data))
            toast.success("Signed in successfully")

            navigate('/dashboard')

        } catch (err) {
            console.log(err);
            if (err.response.status == 400) toast.error(err.response.data)

        }

    }



    return (
        <div>
            <div className='container'>
                <div className={styles.card}>
                    <h1>Login</h1>
                    <p>Please Login for hotel booking!!!</p>
                    <form onSubmit={handleSubmit} className={styles.form}>

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

export default LoginForm