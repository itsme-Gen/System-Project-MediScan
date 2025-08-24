import React, { useState } from 'react';
import { 
  Home, 
  Search, 
  FileText, 
  Bell,
  Camera,
  ArrowLeft,
  Stethoscope,
  User,
  MessageCircle
} from 'lucide-react';
import "./SearchUI.css"
import { useNavigate } from 'react-router-dom';
import MedicalSearchCard from '../props/MedicalSearchCard';
import TotalPatientCard from '../props/TotalPatientCard';
import MedicalRecordsCard from '../props/MedicalRecordsCard';
import RecentVisitsCard from '../props/RecentVisitCard';
import HealthcareFilters from '../props/HealthcareFilters';


interface userInfoProps {
  name: string;
  role: string;
}

const SearchUI: React.FC = () => {


  const [user] = useState<userInfoProps>({
    name: "Dr. Sarah Johnson",
    role: "Nurse"
  });

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
          <button className="nav-button" onClick={() =>{navigate("/"); window.scrollTo(0,0);}}>
            <Home />
            Dashboard
          </button>
          <button className="nav-button" onClick={() =>{navigate('/scan');window.scrollTo(0,0)}}>
            <Camera />
            Scan ID
          </button>
          <button className="nav-button active" onClick={()=>{navigate('/search');window.scrollTo(0,0)}}>
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

        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Smart Search</h1>
          <p className="page-subtitle">Use natural language to search through patient records and medical data</p>
          <button className="back-link" onClick={() => {navigate("/");window.scrollTo(0,0);}}>
            <ArrowLeft size={14} />
            Back to Dashboard
          </button>
        </div>
        <div className="medical_search_card">
          <MedicalSearchCard/>
        </div>

        <div className="totalPatientCard">
          <div className="totalPatientCardGrid">
            <TotalPatientCard/>
            <MedicalRecordsCard/>
            <RecentVisitsCard/>
          </div>
        </div>

        <div className="quickFilters">
          <HealthcareFilters/>
        </div>
    </div>
  );
};

export default SearchUI;
