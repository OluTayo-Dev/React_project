import React, {  useState } from "react";
import "./Home.css";







export default function Home() { 
  const [isLogin, setIsLogin] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    alert("Login successful");
    setIsLogin(true);
  };

  return (
    <div>
      {isLogin ? (
        <>
          <p>Welcome to your dashboard page</p>
        </>
      ) : (
        <>
          <div class="main">
            <form onSubmit={onSubmit}>
                <input
                  type="text" 
                  placeholder="Enter email address or password"
                  id="email"
                  onChange={onChange}
                  required
                /> <br />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={onChange}
                  required
                /> <br />
                <button>Log in</button> <br />
                <a href="forgetpassword">Forgotten password?</a> <br />
                <button>Create new account</button>
              </form>
            </div>
          
        </>
      )}
    </div>
  );
}


    

