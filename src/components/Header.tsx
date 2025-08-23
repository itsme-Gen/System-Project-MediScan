import React from 'react' 
const Header: React.FC = () => { 
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault() 
  } 
  return ( // render header
    <header className="header"> {/* header wrapper */} 
      <div className="header-left"> {/* left area with logo */} 
        <div className="logo"> {/* logo container */} 
          <div className="logo-icon">🩺</div> {/* logo icon */} 
          <div className="logo-texts"> {/* text wrapper */} 
            <div className="title">MediScan</div> {/* product title */} 
            <div className="subtitle">Medical Record Verification</div> {/* subtitle */} 
          </div> {/* end texts */} 
        </div> {/* end logo */} 
      </div> {/* end left */} 
      <nav className="nav"> {/* navigation */} 
        <a href="#" onClick={onNavClick}>Dashboard</a> {/* nav link */} 
        <a href="#" className="active" onClick={onNavClick}>Scan ID</a> {/* active link */} 
        <a href="#" onClick={onNavClick}>Search</a> {/* nav link */} 
        <a href="#" onClick={onNavClick}>Records</a> {/* nav link */} 
        <a href="#" onClick={onNavClick}>Assistant</a> {/* nav link */} 
      </nav> {/* end nav */} 
      <div className="header-right"> {/* right area with profile */} 
        <div className="bell"> {/* notifications */} 
          <span className="bell-icon">🔔</span> {/* bell emoji */} 
          <span className="badge">2</span> {/* red badge */} 
        </div> {/* end bell */} 
        <div className="profile"> {/* profile pill */} 
          <div className="avatar">👤</div> {/* avatar */} 
          <div className="profile-info"> {/* name + role */} 
            <div className="name">Nurse Maria Garcia</div> {/* user name */} 
            <div className="role">NURSE</div> {/* role badge */} 
          </div> {/* end profile-info */} 
        </div> {/* end profile */} 
      </div> {/* end right */} 
    </header> // end header
  ) // end return
} // end component
export default Header // export Header