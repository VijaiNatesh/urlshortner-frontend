import React, { useState} from 'react'
import styles from '../../src/myStyles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createUrl} from '../redux/action/urlAction';


function Url() {

    const [url, setUrl] = useState()

    const dispatch = useDispatch()

  

    const state = useSelector(state => state.url)
    console.log(state)
    const { urlInfo} = state
    console.log(urlInfo)
   

    const urlHandler = (e) => {
        e.preventDefault()
        const longUrl = {
            longUrl: url
        }
        dispatch(createUrl(longUrl)) 
        setUrl(" ")   
    }
    return (
        <div>
            <form className={styles.userform}>
                <div className={styles.userlabel}>
                    <label>Enter Long URL:</label>
                    <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                </div>
                <div className={styles.userlabel}>
                    <button onClick={urlHandler}>Generate Short Url</button>
                </div>
            </form>        

        </div>
    )
}

export default Url
