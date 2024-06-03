import { useState } from "react"
// import { NavLink } from "react-router-dom"

function Register() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    phone: "",
    pass: ""
  })

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user)
  }
  return (
      <div>
        <div className="register-container">
          <div className="register-heading text-center">
            <h2>Welcome to User Interface API</h2>
          </div>
          <div className="register-form">
            <div className="register-heading">
              <h3>Register Page</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-section">
                <input type="text" name="fname" placeholder="First Name" required autoComplete="off" value={user.fname} onChange={handleInput} />
              </div>
              <div className="input-section">
                <input type="text" name="lname" placeholder="Last Name" required autoComplete="off" value={user.lname} onChange={handleInput} />
              </div>
              <div className="input-section">
                <input type="text" name="username" placeholder="Username" required autoComplete="off" value={user.username} onChange={handleInput} />
              </div>
              <div className="input-section">
                <input type="email" name="email" placeholder="Email" required autoComplete="off" value={user.email} onChange={handleInput} />
              </div>
              <div className="input-section">
                <input type="number" name="phone" placeholder="Phone no" required autoComplete="off" value={user.phone} onChange={handleInput} />
              </div>
              <div className="input-section">
                <input type="password" name="pass" placeholder="Password" required autoComplete="off" value={user.pass} onChange={handleInput} />
              </div>
              <div className="button-register text-end">
                {/* <NavLink to="/"> */}
                  <button type="submit">Register</button>
                {/* </NavLink> */}
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Register
