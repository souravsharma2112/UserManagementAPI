import { NavLink } from 'react-router-dom'
import profile from '../assets/img/profile.webp'
function Userdetails() {
    return (
        <div className="details-container">
            <div className="detailss-container">
                <div className="left-side">
                <div className='userdetails'>
                    <h2>User Details</h2>
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
                    <div className="name-col pb-4">
                        <div className="fname">
                            <h2>First Name</h2>
                            <h1>Somya</h1>
                        </div>
                        <div className="fname">
                            <h2>Last Name</h2>
                            <h1>Singh</h1>
                        </div>
                    </div>
                    <div className="fname pb-4">
                        <h2>Username</h2>
                        <h1>somyasingh20</h1>
                    </div>
                    <div className="fname pb-4">
                        <h2>Email</h2>
                        <h1>somyasingh20@gmail.com</h1>
                    </div>
                    <div className="fname pb-4">
                        <h2>Mobile No</h2>
                        <h1>9471553299</h1>
                    </div>
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

export default Userdetails
