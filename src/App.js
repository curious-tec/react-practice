import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import './styles.css';
import { useState } from "react";

function App() {
  const [showIcon ,setShowIcon] = useState(false);
  console.log("new change")
  console.log("changes again")
  return (
    <>
    <div className="App">
    <div className="pic">
      <img src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="welcome" />
    </div>
    <div className="log">
      <img src="https://www.shutterstock.com/shutterstock/photos/660000226/display_1500/stock-vector-star-vector-icon-660000226.jpg" alt="star" />
      <div className="wel">
        <h2>Welcome back!</h2>  
      </div>
      <div className="below">
        <p>Please enter your details</p>
            </div>

     <form action="enter">
      <label htmlFor="eml">Email</label>
      <br />
      <input type="email" name="eml" id="eml" />
      <br />
      <label htmlFor="psd">Password</label>
      <br />
      <input type={showIcon ? "text" : "password"} name="psd" id="psd" />
      {/* <input type="checkbox"name="s" id="s" /> */}
      {/* <button className="s"> */}
    
      
      {
        showIcon ? (
          <FaEyeSlash className="s" onClick={() => setShowIcon(!showIcon)}/>
        ) : (
          <FaEye className="s" onClick={() => setShowIcon(!showIcon)}/>
        )
      }
      {/* </button> */}
      {/* <FaEyeSlash /> */}
      <br />
      
      <br />
      <div className="reset-password-container">
        <div>
          <input type="checkbox" name="o"id="z" />
          <label htmlFor="rmbr" name="rmbr" >Remember for 30 days</label>
        </div>
        <div>
        <a href="/reset-password" className="forget-password">Forget password?</a>
        </div>
      </div>
     </form>
     <div className="additional-login">

      <div className="main-login">
        <a href="http:/Log in">Login</a>
      </div>

      <div className="google">
      <a href="www.google.com">
      
        <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png" alt="google" />
        <p>Log in with Google</p>
        
      </a>
      </div>
     </div>
     

      
    </div>
    <div className="signup">
      <a href="http:/signup"><p>Don't have account?Sign up</p></a>
     </div>
    </div>
   
    
    </>
  );
}

export default App;
