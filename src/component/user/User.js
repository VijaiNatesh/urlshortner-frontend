import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { createUser } from '../../redux/action/userAction';
import styles from '../../../src/myStyles.module.css'

function User() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()

    const state = useSelector(state => state.user)
    console.log(state)
    const {userInfo} = state

    const registerHandler = (e) => {
        e.preventDefault()
        const userData = {
            name: name,
            email: email,
            password: password
        }
        dispatch(createUser(userData))
        setName("")
        setEmail("")
        setPassword("")
    }
    return (
        <div>  
            <h1>Registration Details</h1>        
            <form className = {styles.userform}>
                <div className = {styles.userlabel}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className = {styles.userlabel}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className = {styles.userlabel}>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick = {registerHandler}>Register</button>
            </form>
            <p className = {styles.messages}><b>{userInfo}</b></p>
        </div>
    )
}

export default User
