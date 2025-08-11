import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScanID from './components/pages/ScanID'
import MediScanDashboard from './components/pages/MediScanDashboard'
import Login from './components/pages/Login'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Routes>
          <Route path="/" element={<MediScanDashboard />} />
          <Route path="/scan" element={<ScanID />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
