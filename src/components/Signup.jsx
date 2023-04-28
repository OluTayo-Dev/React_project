import React from 'react';

export default function Signup() {

  return (
 <>
    <div class="parent">

      
        <form id="type">
        <h1>Sign Up</h1>
             <input type="text" id="name"  placeholder="Enter your name" /> <br />
             <input type="text" id="email2"  placeholder="Enter your email" /><br />
             <input type="password" id="pass1"  placeholder="Create password" /> <br />
             <input type="password" id="pass2"  placeholder="Comfirm passord" /><br />

             <input type="checkbox" id="mark" /><p> I accept all terms & conditions</p>

             <button >Register Now</button>
              <h6>Already have an account? <a href="#">Log now</a></h6>
        </form>
        <div class="content">
            <option>facebook</option>
            <option>Sign up</option>
            <option>Form</option>
        </div>

    </div>
    
    
  </>
  );
}



