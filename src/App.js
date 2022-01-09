import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from './component/user/User';
import Navigation from './component/Navigation';
import Forgotpassword from './component/Forgotpassword';
import Resetpassword from './component/Resetpassword';
import Login from './component/Login';
import Url from './component/Url';
import Urlist from './component/Urlist';

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<User />} />
          <Route path = "/login" element = {<Login/>}/>
          <Route path="/forgotpassword" element={<Forgotpassword/>} />
          <Route path = "/passwordreset/:userId/:token" element = {<Resetpassword/>}/>
          <Route path = "/url" element = {<Url/>}/>
          <Route path = "/urlist" element = {<Urlist/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
