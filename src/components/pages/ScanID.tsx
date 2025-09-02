import React, { useState } from 'react';
import { 
  Home, 
  Search, 
  FileText, 
  Camera,
  Upload,
  ImageIcon,
  AlertCircle,
  ArrowLeft,
  Zap,
  Stethoscope,
  User,
  MessageCircle
} from 'lucide-react';
import './ScanID.css';
import { useNavigate } from 'react-router-dom';
import ProfileMenu from '../props/ProfileMenu';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface userInfoProps {
  name: string;
  role: string;
}

const ScanID: React.FC = () => {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [user] = useState<userInfoProps>({
    name: "Dr. Juan Dela Cruz",
    role: "Doctor"
  });

  const navigate = useNavigate();

  const [showProfileMenu,setShowProfileMenu] = useState(false);

  const handleTakePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, 300, 200);
      ctx.fillStyle = '#666';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Captured ID Document', 150, 100);
      setCapturedImage(canvas.toDataURL());
    }
  };

  const handleUploadImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setCapturedImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

const handleProcessImage = async () => {
  if (!capturedImage) {
    toast.error("Please capture an image first."); // Toast for empty image
    return;
  }
  
  setIsProcessing(true);
  try {
    // Convert base64 to Blob
    const res = await fetch(capturedImage);
    const blob = await res.blob();
    const file = new File([blob], "image.jpg", { type: "image/jpeg" });
    
    // Prepare FormData
    const formData = new FormData();
    formData.append("file", file);
    
    // Send to backend
    const response = await axios.post("http://127.0.0.1:5000/classify", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    
    const prediction = response.data.prediction; // "ID" or "Not ID"
    console.log("Result", prediction);
    
    if (prediction === "ID") {
      navigate("/ocr", { state: { imageData: capturedImage, prediction } });
    } else {
      toast.dismiss()
      toast.error("Please Upload an ID");
    }
  } catch (error) {
    console.error("Error classifying image:", error);
    toast.error("Failed to classify image. Please try again.");
  } finally {
    setIsProcessing(false);
  }
};
  return (
    <div className="scanID">
      
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
              <div className="user-avatar"onClick={()=>{setShowProfileMenu((prev)=>!prev)}}>
                <User />
              </div>
              <ProfileMenu show={showProfileMenu}/>
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
          <button className="nav-button active">
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

        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Scan Patient ID</h1>
          <p className="page-subtitle">Capture or upload a patient identification document for verification</p>
          <button className="back-link" onClick={() => {navigate("/");window.scrollTo(0,0);}}>
            <ArrowLeft size={14} />
            Back to Dashboard
          </button>
        </div>

        {/* Card Grid */}
        <div className="card-grids">
          {/* Capture Photo Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon camera">
                <Camera size={20} />
              </div>
              <div className="card-header-text">
                <h3>Capture Photo</h3>
                <p>Use your device camera or upload an existing image</p>
              </div>
            </div>
            <div className="card-content">
              {capturedImage ? (
                <img src={capturedImage} alt="Captured ID" className="captured-image" />
              ) : (
                <div className="image-placeholder">
                  <ImageIcon size={48} />
                </div>
              )}
              
              <h4 className="placeholder-text">
                {capturedImage ? 'Image captured successfully' : 'No image captured yet'}
              </h4>
              <p className="placeholder-subtext">
                {capturedImage ? 'You can now process this image' : 'Choose an option below to get started'}
              </p>
              
              <div className="button-group">
                <button className="btn btn-primary" onClick={handleTakePhoto}>
                  <Camera size={16} />
                  Take Photo
                </button>
                <button className="btn btn-secondary" onClick={handleUploadImage}>
                  <Upload size={16} />
                  Upload Image
                </button>
              </div>
            </div>
          </div>

          {/* OCR Processing Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon ocr">
                <Zap size={20} />
              </div>
              <div className="card-header-text">
                <h3>OCR Processing</h3>
                <p>Extract text data from the captured image</p>
              </div>
            </div>
            <div className="card-content">
              {capturedImage ? (
                isProcessing ? (
                  <div className="processing-state">
                    <Zap size={48} color="#f57c00" className="loading" />
                    <p className="processing-text">Processing image...</p>
                  </div>
                ) : (
                  <div>
                    <div className="image-placeholder" style={{borderStyle: 'solid', borderColor: '#28a745'}}>
                      <Zap size={48} color="#28a745" />
                    </div>
                    <h4 className="placeholder-text" style={{color: '#28a745'}}>Ready to process</h4>
                    <p className="placeholder-subtext">Click below to extract text from the image</p>
                    <button 
                      className="btn btn-success" 
                      onClick={handleProcessImage}
                      disabled={isProcessing}
                    >
                      <Zap size={16} />
                      Process Image
                    </button>
                  </div>
                )
              ) : (
                <div className="no-image-state">
                  <AlertCircle size={48} />
                  <p className="no-image-text">No image to process</p>
                  <p className="no-image-subtext">Capture or upload an ID image first</p>
                </div>
              )}

              <div className="alert-info">
                <h4>Tips for best results:</h4>
                <ul>
                  <li>Ensure good lighting on the ID</li>
                  <li>Keep the ID flat and straight</li>
                  <li>Avoid shadows and reflections</li>
                  <li>Make sure all text is clearly visible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ScanID;
