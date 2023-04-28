import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';




export default function Home() { 
    const navigate = useNavigate ();
  return (  
    
    <>
    <div class="main">
            <h2>facebook</h2>
            <p>Facebook helps you connect and share</p>
                <p> with the people in your life</p>
        </div>
    <div class="input">
        <form action="" id="pop">
            <input type="text"   id="email"  placeholder="Enter email address or Phone Number" /> <br />
            <input type="password" id="pass" placeholder="Password" /> <br />
            <button  id="log" onClick={() => navigate('/Signup')} >Log in</button> <br />
            <a href="forgetpassword" id="for">forgetten password?</a> <br />
            <hr  id="fb"/>
            <button id="click" onClick={() => navigate('/Create')} >Create new account</button> <br />
        </form>
    </div>
    <h5>Create a Page for a celebbrity, brand or business</h5>
    </>
    
  )
}
