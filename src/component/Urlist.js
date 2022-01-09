import React,{useEffect}from 'react'
import styles from '../../src/myStyles.module.css'
import {useDispatch, useSelector} from "react-redux"
import { fetchUrl} from '../redux/action/urlAction';



function Urlist() {   
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUrl())
    },[dispatch])

    const state = useSelector(state => state.url)
    console.log(state)
    const { urlDetails} = state  
    console.log(urlDetails)  

   
    return (
        <div>            
            <table className={styles.table}>
            <thead>
                <tr >
                    <th  className={styles.table}>Long Url</th>
                    <th  className={styles.table}>Short Url</th>
                    <th> Explore</th>

                </tr>
            </thead>
            <tbody>
                {urlDetails && urlDetails.map(url => {
                    return (
                        <tr key={url._id}>
                            <td  className={styles.table}>{url.longUrl}</td>
                            <td  className={styles.table}>{url.urlCode}</td>                            
                            <td className={styles.table}><a href = {`https://urlshortner-backend-vj.herokuapp.com/api/url/${url.urlCode}`} target = "_blank" rel="noreferrer">Visit Page</a></td>
                        </tr>
                    )
                })}
            </tbody>
            </table>          
        </div>
    )
}


export default Urlist
