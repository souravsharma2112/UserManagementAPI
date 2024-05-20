import { NavLink } from 'react-router-dom'
import profile from '../assets/img/profile.webp'

function Updatepass() {
    return (
        <div className="details-container">
            <div className="detailss-container">
                <div className="left-side">
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
                    <div className="userdetails">
                        <h2>Update Password</h2>
                    </div>
                    <form action="#">
                        <div className="fname p-4">
                            <label htmlFor="pass">Set Password</label>
                            <input type="text" name="pass" id="" />
                        </div>
                        <div className="fname p-4">
                            <label htmlFor="spass">Confirm Password</label>
                            <input type="password" name="spass" id="" />
                        </div>
                        <div className="fname p-4">
                            <button>Update</button>
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

export default Updatepass
