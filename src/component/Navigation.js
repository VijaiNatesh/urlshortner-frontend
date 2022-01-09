import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import styles from '../../src/myStyles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/action/loginAction';



function Navigation(){
  const dispatch = useDispatch()

  const state = useSelector(state => state.login)
  const { userLogin } = state
  console.log(userLogin)

  const logoutHandler = () => {
    dispatch(logoutUser())  
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">URL Shortner</Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navi}>
              {!userLogin ?
                <>
                  <Nav.Link className={styles.navilink} href="register">Register</Nav.Link>
                  <Nav.Link className={styles.navilink} href="login">Login</Nav.Link>
                  <Nav.Link className={styles.navilink} href="forgotpassword">Forgot Password</Nav.Link>
                </>
                :
                <>
                  <Nav.Link className={styles.navilink} href="url">Generate Short URL</Nav.Link>
                  <Nav.Link className={styles.navilink} href="urlist">URL LIST</Nav.Link>
                  <Nav.Link className={styles.navilink} href="logout" onClick={logoutHandler}>Logout</Nav.Link>
                  <h3 className={styles.usernavi}>{userLogin.name}</h3>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
