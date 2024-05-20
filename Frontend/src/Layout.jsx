import Navbar from "./components/Navbar"

import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <div className='main'>
      <div className="home-container">
        <Navbar/>
        <main className="home-main">
          {/* <Card image1={image1} cardcontent = "Account Details "/>
          <Card image1={image1} cardcontent = "Update Password "/>
          <Card image1={image1} cardcontent = "Edit User Details "/> */}
          {/* <Home1/> */}
          <Outlet/>
          {/* <Profiledetails/> */}
        </main>
      </div>
      </div>
    )
  }
  
  export default Layout