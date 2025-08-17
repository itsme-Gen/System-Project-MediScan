import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Edit, RotateCcw, Search, ChevronRight,
  User, Calendar, Hash, MapPin, Droplet, Phone,
  Camera, FileText, MessageCircle, Home, Stethoscope, Bell
} from 'lucide-react';
import './OCRResults.css';

interface userInfoProps {
  name: string;
  role: string;
}

const OCRResults: React.FC = () => {
  const location = useLocation();
  const imageData = location.state?.imageData;
  const navigate = useNavigate();

  const [user] = useState<userInfoProps>({
    name: "Sarah Johnson",
    role: "Nurse"
  });

  // State to toggle edit mode
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className="ocr-results">
      <div className="main-container-ocr">
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
            <button className="nav-button" onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
              <Home />
              Dashboard
            </button>
            <button className="nav-button active">
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

        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">OCR Result</h1>
          <p className="page-subtitle">Review and edit the extracted information before proceeding</p>
          <button className="back-link" onClick={() => { navigate("/"); window.scrollTo(0, 0); }}>
            <ArrowLeft size={14} />
            Back to Dashboard
          </button>
        </div>

        {/* Main Content */}
        <div className="content-grid">
          {/* Original Image Section */}
          <div className="image-section card">
            <div className="section-header">
              <h3>Original Image</h3>
              <p>Scanned patient ID document</p>
            </div>

            <div className="image-container">
              {imageData ? (
                <img
                  src={imageData}
                  alt="Scanned patient ID document"
                  className="scanned-image"
                />
              ) : (
                <div className="no-image-placeholder">
                  <p>No image data available</p>
                </div>
              )}
            </div>

            <div className="ocr-confidence">
              <div className="confidence-header">
                <span>OCR Confidence:</span>
              </div>
              <p>Processing completed successfully</p>
            </div>
          </div>

          {/* Extracted Information Section */}
          <div className="info-section card">
            <div className="section-header">
              <h3>Extracted Information</h3>
              <p>Verify the accuracy of extracted data</p>
              <button
                className="edit-btn"
                onClick={() => setIsEditable(!isEditable)}
              >
                <Edit size={16} />
                {isEditable ? "Save" : "Edit Fields"}
              </button>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">
                  <User size={16} />
                  Full Name *
                </label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="MARIA SANTOS DELA CRUZ"
                  readOnly={!isEditable}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Hash size={16} />
                  ID Number *
                </label>
                <input
                  type="text"
                  className="form-input id-field"
                  defaultValue="ID-2024-001234"
                  readOnly={!isEditable}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Calendar size={16} />
                  Birth Date *
                </label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="1985-03-15"
                  readOnly={!isEditable}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <MapPin size={16} />
                  Address
                </label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="123 Rizal St., Makati City"
                  readOnly={!isEditable}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Droplet size={16} />
                  Blood Type
                </label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="O+"
                  readOnly={!isEditable}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Phone size={16} />
                  Emergency Contact
                </label>
                <input
                  type="text"
                  className="form-input"
                  defaultValue="Juan Dela Cruz (09171234567)"
                  readOnly={!isEditable}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn btn-secondary">
            <RotateCcw size={16} />
            Scan Again
          </button>
          <button className="btn btn-primary">
            <Search size={16} />
            Search Records
          </button>
          <button className="btn btn-primary">
            Next
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="help-text">
          Click "Search Records" to verify against existing patient database
        </p>
      </div>
    </div>
  );
};

export default OCRResults;
