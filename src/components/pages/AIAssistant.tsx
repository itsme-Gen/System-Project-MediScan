import { ArrowLeft, Camera, FileText, Home, MessageCircle, Search, Stethoscope, User } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./AiAssistant.css"
import QuickActionsMedicalCard from '../props/QuickActionsMedicalCard';
import ChatAssistantCard from '../props/ChatAssistantCard';
import AssistantCapabilitiesCard from '../props/AssistantCapabilitiesCard';
import ProfileMenu, { handleLogout } from '../props/ProfileMenu';

interface userInfoProps {
  name: string;
  role: string;
}

const AIAssistant  = () => {

const [user,setUser] = useState<userInfoProps>({
    name:"Dr. Juan Dela Cruz",
    role:"Doctor"
})

const [showProfileMenu,setShowProfileMenu]=useState(false);

const navigate = useNavigate();
  return (
     <div className="search">
      
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon">
              <Stethoscope />
            </div>
            <div className="logo-text">
              <h1>MediScan</h1>
              <p>Medical Record Verification</p>
            </div>
          </div>
          
          <div className="header-right">
            <div className="user-profile">
              <div className="user-avatar" onClick={()=>{setShowProfileMenu((prev)=>!prev)}}>
                <User />
              </div>
              <ProfileMenu show={showProfileMenu} handleLogout={handleLogout}/>
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
          <button className="nav-button" onClick={() =>{navigate("/dashboard"); window.scrollTo(0,0);}}>
            <Home />
            Dashboard
          </button>
          <button className="nav-button" onClick={() =>{navigate('/scan');window.scrollTo(0,0)}}>
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
          <button className="nav-button active">
            <MessageCircle />
            Assistant
          </button>
        </div>
      </nav>

        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">AI Medical Assistant</h1>
          <p className="page-subtitle">Chat with out AI assistant for medical record queries and administrative help</p>
          <button className="back-link" onClick={() => {navigate("/");window.scrollTo(0,0);}}>
            <ArrowLeft size={14} />
            Back to Dashboard
          </button>
        </div>

        <div className="chatAssistant">
          <div className="chatAssistantGrid">
              <QuickActionsMedicalCard/>
              <ChatAssistantCard/>
          </div>
        </div>
        <div className="assistantCapabilitiesCard"> 
          <AssistantCapabilitiesCard/>
        </div>
        </div>
  )
}

export default AIAssistant
