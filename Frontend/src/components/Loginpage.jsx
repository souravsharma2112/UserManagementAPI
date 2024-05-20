import { useState } from "react";
import { NavLink } from "react-router-dom";
function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(user)
  }
  return (
    <div>
      <div className="login-container">
        <div className="login-h">
          <h1>Login</h1>
        </div>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="input-title">username</span>
            <input type="text" name="username" id="username" required autoComplete="off"
              value={user.username} onChange={handleInput}
            />
          </div>
          <div className="input-box">
            <span className="input-title">password</span>
            <input type="password" name="password" id="password" required autoComplete="off"
              value={user.password} onChange={handleInput} />
          </div>

          <div className="otpbox">
            <label>OTP :</label>
            <input type="text" />
            <button>Get OTP</button>
          </div>

          <div className="input-box">
              <button type="submit" className="inputBtn">Log in</button>
            <button className="inputBtn2">Forgot Password? </button>
          </div>
        </form>
      </div>
      <div className="signup-container">
        <span>Dont have an account? </span>
        <NavLink to="/register">
          <button className="signup">
            Register
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Login
