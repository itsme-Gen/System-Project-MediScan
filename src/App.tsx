import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ScanID from './components/pages/ScanID'
import MediScanDashboard from './components/pages/MediScanDashboard'
import Login from './components/pages/Login'
import OCRResults from './components/pages/OCRResults'
import MedicalInfo from './components/pages/MedicalInfo'
import SearchUI from './components/pages/SearchUI'
import AIAssistant from './components/pages/AIAssistant'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Routes>
          <Route path="/" element={<MediScanDashboard />} />
          <Route path="/scan" element={<ScanID />} />
          <Route path="/ocr" element={<OCRResults />} />
          <Route path="/medicalinfo" element={<MedicalInfo />} />
          <Route path="/search" element={<SearchUI />} />
          <Route path="/assistant" element={<AIAssistant />} />
        </Routes>
      )}
      
      {/* React Hot Toast container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </BrowserRouter>
  )
}

export default App
