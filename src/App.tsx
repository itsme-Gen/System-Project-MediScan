import React from 'react' // import React
import Header from './components/Header' // import Header component
import Assistant from './components/Assistant' // import Assistant component
const App: React.FC = () => { // declare App functional component
  return ( // return JSX UI
    <div className="app"> {/* root app container */} 
      <Header /> {/* top header/navigation */} 
      <main className="container"> {/* main content wrapper */} 
        <Assistant /> {/* assistant page content */} 
      </main> {/* end main */} 
    </div> // end root
  ) // end return
} // end component
export default App // export App as default