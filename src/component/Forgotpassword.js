import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { createToken } from '../redux/action/forgotpasswordAction';
import styles from '../../src/myStyles.module.css'
function Forgotpassword() {
    const [email, setEmail] = useState()
    const dispatch = useDispatch()

    const state = useSelector(state => state.token)
    console.log(state)
    const {tokenInfo} = state

    const tokenHandler = (e) => {
        e.preventDefault();
        const emailData = ({
            email : email
        })
        dispatch(createToken(emailData))
        setEmail("")
    }

    return (
        <div>
             <p className = {styles.messages}>{tokenInfo}</p>
            <form className = {styles.userform}>
            <div className = {styles.userlabel}>
                <label >Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
            </div>
            <div className = {styles.userlabel}>
            <button onClick = {tokenHandler}>Forgot Password</button>        
           </div> 
           </form>
          
        </div>
    )
}

export default Forgotpassword