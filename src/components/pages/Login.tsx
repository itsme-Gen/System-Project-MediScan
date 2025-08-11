import React, { useState } from 'react';
import { Stethoscope, Mail, Lock, User, Phone, Building, CreditCard, Shield } from 'lucide-react';
import './Login.css';

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  role: string; 
  department: string;
  licenseNumber: string;
  hospitalId: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  const [isLoading, setIsLoading] = useState(false);
  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  });

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    role: '',
    department: '',
    licenseNumber: '',
    hospitalId: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleSignInChange = (field: string, value: string) => {
    setSignInData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (activeTab === 'signin') {
        console.log('Sign in submitted:', signInData);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
        if (signInData.email && signInData.password) {
          onLogin(); 
          window.scrollTo(0,0)
        } else {
          alert('Please enter valid credentials');
        }
      } else {
        console.log('Sign up submitted:', formData);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
        if (formData.email && formData.password && formData.password === formData.confirmPassword) {
          onLogin(); // Trigger parent to log in
        } else {
          alert('Please fill all required fields and ensure passwords match');
        }
      }
    } catch (error) {
      console.error('Authentication error:', error);
      alert('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderSignInForm = () => (
    <>
      <div className="form-group">
        <label htmlFor="signin-email">Email</label>
        <div className="input-container">
          <Mail size={18} className="input-icon" />
          <input
            type="email"
            id="signin-email"
            value={signInData.email}
            onChange={(e) => handleSignInChange('email', e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="signin-password">Password</label>
        <div className="input-container">
          <Lock size={18} className="input-icon" />
          <input
            type="password"
            id="signin-password"
            value={signInData.password}
            onChange={(e) => handleSignInChange('password', e.target.value)}
            placeholder="Enter your password"
            required
            disabled={isLoading}
          />
        </div>
      </div>
    </>
  );

  const renderSignUpForm = () => (
    <>
      {/* Personal Information */}
      <div className="form-section">
        <h3 className="section-title">Personal Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <div className="input-container">
              <User size={18} className="input-icon" />
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleFormChange('firstName', e.target.value)}
                placeholder="First name"
                required
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <div className="input-container">
              <User size={18} className="input-icon" />
              <input
                type="text"
                id="middleName"
                value={formData.middleName}
                onChange={(e) => handleFormChange('middleName', e.target.value)}
                placeholder="Middle name"
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <div className="input-container">
              <User size={18} className="input-icon" />
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleFormChange('lastName', e.target.value)}
                placeholder="Last name"
                required
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div className="form-section">
        <h3 className="section-title">Professional Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="role">Role *</label>
            <div className="input-container">
              <Building size={18} className="input-icon" />
              <select
                id="role"
                value={formData.role}
                onChange={(e) => handleFormChange('role', e.target.value)}
                required
                disabled={isLoading}
              >
                <option value="">Select your role</option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Nurse</option>
                <option value="technician">Technician</option>
                <option value="administrator">Administrator</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <div className="input-container">
              <Building size={18} className="input-icon" />
              <input
                type="text"
                id="department"
                value={formData.department}
                onChange={(e) => handleFormChange('department', e.target.value)}
                placeholder="e.g. Cardiology, Emergency"
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="licenseNumber">License Number</label>
            <div className="input-container">
              <CreditCard size={18} className="input-icon" />
              <input
                type="text"
                id="licenseNumber"
                value={formData.licenseNumber}
                onChange={(e) => handleFormChange('licenseNumber', e.target.value)}
                placeholder="Professional license number"
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="hospitalId">Hospital ID</label>
            <div className="input-container">
              <CreditCard size={18} className="input-icon" />
              <input
                type="text"
                id="hospitalId"
                value={formData.hospitalId}
                onChange={(e) => handleFormChange('hospitalId', e.target.value)}
                placeholder="Employee/Hospital ID"
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="form-section">
        <h3 className="section-title">Contact Information</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="signup-email">Email *</label>
            <div className="input-container">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                id="signup-email"
                value={formData.email}
                onChange={(e) => handleFormChange('email', e.target.value)}
                placeholder="Professional email"
                required
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <div className="input-container">
              <Phone size={18} className="input-icon" />
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => handleFormChange('phoneNumber', e.target.value)}
                placeholder="Contact number"
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="form-section">
        <h3 className="section-title">Security</h3>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="signup-password">Password *</label>
            <div className="input-container">
              <Lock size={18} className="input-icon" />
              <input
                type="password"
                id="signup-password"
                value={formData.password}
                onChange={(e) => handleFormChange('password', e.target.value)}
                placeholder="Create password"
                required
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <div className="input-container">
              <Shield size={18} className="input-icon" />
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => handleFormChange('confirmPassword', e.target.value)}
                placeholder="Confirm password"
                required
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="mediscan-container">
      <div className="mediscan-header">
        <div className="mediscan-icon">
          <Stethoscope size={48} color="white" />
        </div>
        <h1 className="mediscan-title">MediScan</h1>
        <p className="mediscan-subtitle">Medical Record Verification System</p>
      </div>

      <div className={`mediscan-card ${activeTab === 'signup' ? 'expanded' : ''}`}>
        <div className="card-header">
          <Stethoscope size={20} color="#6b7280" />
          <h2>Access MediScan</h2>
        </div>
        <p className="card-subtitle">Sign in to your account or create a new one</p>

        <div className="tab-container">
          <button
            className={`tab ${activeTab === 'signin' ? 'active' : ''}`}
            onClick={() => setActiveTab('signin')}
            disabled={isLoading}
          >
            <User size={16} />
            Sign In
          </button>
          <button
            className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveTab('signup')}
            disabled={isLoading}
          >
            <User size={16} />
            Create Account
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mediscan-form">
          {activeTab === 'signin' ? renderSignInForm() : renderSignUpForm()}

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading
              ? activeTab === 'signin'
                ? 'Signing In...'
                : 'Creating Account...'
              : activeTab === 'signin'
              ? 'Sign In'
              : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
