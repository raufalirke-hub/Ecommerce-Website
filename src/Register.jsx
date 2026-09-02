import { Link } from "react-router-dom"
import { useState } from "react"

export default function Register(){
  const [show,setShow]=useState(false)
  return(
    <div className="cloth-auth">
      <div className="cloth-left">
        <img src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1000" alt="fashion" />
      </div>

      <div className="cloth-right">
        <h1>JOIN THE STYLE CLUB</h1>
        <p className="cloth-sub">Create account to shop new drops, exclusive offers & track your orders.</p>

        <div className="field">
          <label>Full Name</label>
          <input placeholder="Enter your full name" />
        </div>

        <div className="field">
          <label>Email</label>
          <input placeholder="Enter your email" />
        </div>

        <div className="field">
          <label>Password</label>
          <div className="pass">
            <input type={show?"text":"password"} placeholder="Create password" />
            <span onClick={()=>setShow(!show)}>👁</span>
          </div>
        </div>

        <p className="login-text">Already have an account? <Link to="/login">Login</Link></p>

        <button className="black-btn">Create Account</button>

        <p className="or-text">Or continue with</p>

        <div className="social-2">
          <button>Google</button>
          <button>Apple</button>
        </div>
      </div>
    </div>
  )
} 