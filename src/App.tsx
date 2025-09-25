import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ScanID from './components/pages/ScanID'
import MediScanDashboard from './components/pages/MediScanDashboard'
import Login from './components/pages/Login'
import OCRResults from './components/pages/OCRResults'
import MedicalInfo from './components/pages/MedicalInfo'
import SearchUI from './components/pages/SearchUI'
import AIAssistant from './components/pages/AIAssistant'
import RedirectIfAuthenticated from './components/protectRoute/RedirecrIfAuthenticated'
import ProtectedRoute from './components/protectRoute/ProtectedRoute'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  },[])

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Routes>
          <Route path='/login' element={<RedirectIfAuthenticated isAuthenticated={isLoggedIn}><Login onLogin={() => setIsLoggedIn(true)} /></RedirectIfAuthenticated>} />
          <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isLoggedIn}><MediScanDashboard /></ProtectedRoute>} />
          <Route path="/scan" element={<ProtectedRoute isAuthenticated={isLoggedIn}><ScanID /></ProtectedRoute>} />
          <Route path="/ocr" element={<ProtectedRoute isAuthenticated={isLoggedIn}><OCRResults /></ProtectedRoute>} />
          <Route path="/medicalinfo" element={<ProtectedRoute isAuthenticated={isLoggedIn}><MedicalInfo /></ProtectedRoute>} />
          <Route path="/search" element={<ProtectedRoute isAuthenticated={isLoggedIn}><SearchUI /></ProtectedRoute>} />
          <Route path="/assistant" element={<ProtectedRoute isAuthenticated={isLoggedIn}><AIAssistant /></ProtectedRoute>} />
          <Route path="*" element={<MediScanDashboard />} />
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
