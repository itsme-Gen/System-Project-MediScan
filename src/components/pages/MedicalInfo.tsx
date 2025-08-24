import React, { useState } from 'react';
import {  
  Bell, 
  Camera, 
  Home, 
  MessageCircle, 
  Search, 
  User,
  Stethoscope,
  FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import "./MedicalInfo.css";
import PatientInfoCard from '../props/PatientInfoCard';
import MedicalHistoryCard from '../props/MedicalHistoryCard';
import VaccinationHistoryCard from '../props/VaccinationHistoryCard';
import CurrentMedication from '../props/CurrentMedication';
import LabResult from '../props/LabResult';
import RemarksAndNotes from '../props/RemarksAndNotes';
import SavePatientInfo from '../props/SavePatientInfo';



interface userInfoProps{
  name:String;
  role:String;
}


const MedicalInfo: React.FC = () => {
  const [user,setUser] =useState<userInfoProps>({
    name:"Dr. Sarah Johnson",
    role:"Nurse"
  })
  const navigate = useNavigate();



  return (
    <div className="medical-info">
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
            <div className="notification-bell">
              <Bell />
              <span className="notification-badge">2</span>
            </div>
            <div className="user-profile">
              <div className="user-avatar">
                <User />
              </div>
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
          <button className="nav-button">
            <Search />
            Search
          </button>
          <button className="nav-button">
            <FileText />
            Records
          </button>
          <button className="nav-button">
            <MessageCircle />
            Assistant
          </button>
        </div>
      </nav>

       {/* Main Content */}
      <main className="main-content">
        <div className="welcome-section">
          <h2>Medical Information</h2>
          <p>Complete Patient Medical Profile</p>
        </div>

        <div className="card-info-container">
            <div className="card-grid">
                <div className="patient_card">
                    <PatientInfoCard
                    name="Juan Dela Cruz"
                    birthDate="July 20, 2004"
                    idNumber={123456789}
                    />
                </div>
                
                <div className="medical_history_card">
                    <MedicalHistoryCard/>
                </div>

                <div className="vaccination_history_card">
                    <VaccinationHistoryCard/>
                </div>

                <div className="currentMedication_history_card">
                    <CurrentMedication/>
                </div>

                <div className="LabResult_card">
                    <LabResult/>
                </div>

                 <div className="remarksAndNotes_card">
                    <RemarksAndNotes/>
                </div>

                  <div className="save-card">
                    <SavePatientInfo/>
                </div>
s
            </div>
        </div>
      </main>



    </div>

    )
}

export default MedicalInfo;