import React, {useState} from 'react'
import styles from '../../src/myStyles.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { resetPassword } from '../../src/redux/action/resetpasswordAction';
import {useParams} from "react-router-dom"

function Resetpassword() {
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const state = useSelector(state => state.resetPassword)
    console.log(state)
    const {newPassword} = state

   const {userId, token} = useParams()
   console.log(userId, token)

    const resetPasswordHandler = (e) => {
            e.preventDefault();           
            dispatch(resetPassword(password, userId, token))
            setPassword(" ")
    }
    return (
        <div>
        <form className = {styles.userform}>
        <div className = {styles.userlabel}>
        <label >New Password:</label><br/>
        <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
        </div>
        <div className = {styles.userformlabel} >
        <button onClick = {resetPasswordHandler}> Reset Password </button>
        </div>
        </form>     
        <p className = {styles.messages}>{newPassword}</p>       
        </div>
    )
}

export default Resetpassword
