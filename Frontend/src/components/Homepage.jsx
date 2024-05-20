import Card from "./Card"
import image1 from "../assets/img/img1.webp"

function Home1() {
  return (
    <>
        <Card image1={image1} cardcontent = "Account Details" goto="/profile"/>
        <Card image1={image1} cardcontent = "Update Password " goto="/updatepass"/>
        <Card image1={image1} cardcontent = "Edit User Details " goto="/updateprofile"/> 
    </>
  )
}

export default Home1
