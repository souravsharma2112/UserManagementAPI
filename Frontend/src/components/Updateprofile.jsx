import { NavLink } from 'react-router-dom'
import profile from '../assets/img/profile.webp'
import { useState } from 'react'
function Edituser() {
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
        <div className="details-container">
            <div className="detailss-container">
                <div className="left-side">
                <div className="userdetails">
                        <h2>Update Profile</h2>
                    </div>
                    <div className="profile-img">
                        <img src={profile} alt="" />
                        <h2>@somyanaa20</h2>
                    </div>
                    <div className="profile-name">
                        <h1>Somya Singh</h1>
                    </div>
                </div>
                {/* <Userdetails/> */}
                <div className="right-side">
                    <form action="#" onSubmit={handleSubmit}>
                        <div className="name-col pb-4">
                            <div className="fname">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" name="fname" id="fname" required autoComplete='off' value={user.fname} onChange={handleInput}/>
                            </div>
                            <div className="fname">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" name="lname" id="lname" required autoComplete='off' value={user.lname} onChange={handleInput} />
                            </div>
                        </div>
                        <div className="fname pb-4">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" required autoComplete='off' value={user.username} onChange={handleInput} />
                        </div>
                        <div className="fname pb-4">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required autoComplete='off' value={user.email} onChange={handleInput} />
                        </div>
                        <div className="fname pb-4">
                            <label htmlFor="phone">Mobile No</label>
                            <input type="number" name="phone" id="phone" required autoComplete='off' value={user.phone} onChange={handleInput} />
                        </div>
                        <div className="fname">
                            <button type="submit">Update</button>
                        </div>
                    </form>
                </div>
                {/* <Edituser /> */}
            </div>
            <div className="closebtn">
                <NavLink to="/home">
                    <button>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </NavLink>
            </div>
        </div>

    )
}

export default Edituser
