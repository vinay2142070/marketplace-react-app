import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/TopNav.module.css'
import logo from '../logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function TopNav() {

    const { auth } = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(auth)

    const onLogout = () => {

        dispatch({
            type: 'LOGOUT',
            payload: null

        })
        window.localStorage.removeItem('auth')
        navigate('/login')
    }

    return (
        <div className={styles.navbar}>
            <Link to='/'>  <img src={logo} className={styles.logo} />
            </Link>
            <ul className='nav-items'>
                <li>  <Link to='/'>
                    <a >Home</a>
                </Link></li>
                {

                    auth === null ? (
                        <>
                            <li>
                                <Link to='/login'>
                                    <a >Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link to='/register'>
                                    <a >Register</a>
                                </Link>
                            </li>
                        </>
                    ) : (

                        <li>

                            <a onClick={onLogout}>Logout</a>

                        </li>)
                }



            </ul>

        </div >
    )
}

export default TopNav