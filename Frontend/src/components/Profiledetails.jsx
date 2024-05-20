import profile from '../assets/img/profile.webp'
// import Edituser from './Edituser'
import Updatepass from './Updatepass'
// import Userdetails from './Userdetails'
function Profiledetails() {
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
        <Updatepass/>
        {/* <Edituser /> */}
      </div>
      <div className="closebtn">
        <button>
          <span className="material-symbols-outlined">
            close
          </span>
        </button>
      </div>
    </div>
  )
}

export default Profiledetails
