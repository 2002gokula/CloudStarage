import React, { useState } from "react"
import "./Header.css"
import Avatar from "@mui/material/Avatar"
const HeaderOptionData = [
  {
    id: 1,
    name: "Files",
    icon: "https://cdn-icons-png.flaticon.com/512/1379/1379905.png",
  },
  {
    id: 2,
    name: "Files",
    icon: "https://cdn-icons-png.flaticon.com/512/1379/1379905.png",
  },
  {
    id: 3,
    name: "Files",
    icon: "https://cdn-icons-png.flaticon.com/512/1379/1379905.png",
  },
  {
    id: 4,
    name: "Files",
    icon: "https://cdn-icons-png.flaticon.com/512/1379/1379905.png",
  },
]
const Header = () => {
  const [active, setActive] = useState(null)
  const HeaderOptions = ({ name, icon, active, id }) => {
    return (
      <div className="HeaderOptions">
        <div
          className={
            active ? "HeaderOption" : "HeaderOptioninactive HeaderOption "
          }
          onClick={() => navigate(id)}
        >
          <img src={icon} alt={name} />
          <h4>{name}</h4>
        </div>
      </div>
    )
  }
  const navigate = (id) => {
    setActive(id)
  }
  return (
    <div className="Header">
      <div className="Logo">
        <img
          src="https://assets.stickpng.com/images/584290baa6515b1e0ad75ac2.png"
          alt="logo"
        />
      </div>
      <div className="HeaderOptionFlex">
        {HeaderOptionData.map((item) => (
          <HeaderOptions
            {...item}
            onClick={navigate}
            active={active === item.id}
          />
        ))}
      </div>
      <SearchSection />
      <ProfileSection />
      <img
        className="ThreeDotBtn"
        src="https://cdn-icons-png.flaticon.com/512/8212/8212733.png"
        alt=""
      />
    </div>
  )
}

const SearchSection = () => {
  return (
    <div className="SearchSection">
      <img src="Images/Group.svg" alt="" />
      <input type="text" placeholder="Search Files...." />
    </div>
  )
}
const ProfileSection = () => {
  return (
    <div className="ProfileSection">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1827/1827295.png"
        alt=""
      />{" "}
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
  )
}
export default Header
