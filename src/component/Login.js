import React, { useState } from 'react'
import styles from '../../src/myStyles.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../redux/action/loginAction';
import {useNavigate} from "react-router-dom"


function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()
   

    const state = useSelector(state => state.login)
    console.log(state)
    const {userLogin} = state

    const loginHandler = (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        dispatch(loginUser(userData))
        setEmail("")
        setPassword("")   
        navigate("/url")       
    }

   
    return (
        <div>
           
            <h1> Login Details </h1>
            <form className={styles.userform}>
                <div className={styles.userlabel}>
                    <label>Email:</label>
                    <input type="email" value = {email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className = {styles.userlabel}>
                <label>Password:</label>
                <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                </div>
                <div className = {styles.userlabel}>
                <button onClick = {loginHandler}> Login </button>
                </div>               
            </form>
            {userLogin && <p className = {styles.messages}>User Logged In</p>}
        </div>
    )
}

export default Login
