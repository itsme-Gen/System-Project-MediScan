import { Camera, FileText, Home, MessageCircle, Search, Stethoscope, User } from 'lucide-react';
import React, { useState } from 'react'
import ProfileMenuCard from '../props/ProfileMenuCard';
import { useNavigate } from 'react-router-dom';

interface userInfoProps{
  name:String;
  role:String;
}


const ProfileMenu = () => {
      const [user,setUser] =useState<userInfoProps>({
        name:"Dr. Juan Dela Cruz",
        role:"Doctor"
      })

      const [showProfileMenu,setShowProfileMenu] = useState(false);
      const navigate = useNavigate();
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <Stethoscope/>
            </div>
            <div className="logo-text">
              <h1>MediScan</h1>
              <p>Medical Record Verification</p>
            </div>
          </div>
          
          <div className="header-right">
            <div className="user-profile">
              <div className="user-avatar" onClick={()=>{setShowProfileMenu((prev) => !prev);}}>
                <User />
              </div>
               <ProfileMenuCard show={showProfileMenu}/>
              <div className="user-info">
                <p>{user.name}</p>
                <p className="user-badge">{user.role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-content">
          <button className="nav-button active" onClick={()=>{navigate("/"); window.scrollTo(0,0);}}>
            <Home />
            Dashboard
          </button>
          <button className="nav-button" onClick={()=>{navigate("/scan");window.scrollTo(0,0);}}>
            <Camera />
            Scan ID
          </button>
          <button className="nav-button" onClick={()=>{navigate('/search');window.scrollTo(0,0)}}>
            <Search />
            Search
          </button>
          <button className="nav-button">
            <FileText />
            Records
          </button>
          <button className="nav-button" onClick={()=>{navigate("/assistant");window.scrollTo(0,0)}}>
            <MessageCircle />
            Assistant
          </button>
        </div>
      </nav>
    </div>
  )
}

export default ProfileMenu
