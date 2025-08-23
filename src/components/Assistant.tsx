import React, { useState } from 'react' // import React and state hook
const Assistant: React.FC = () => { // Assistant component start
  const [message, setMessage] = useState('') // local state for input text
  const [messages, setMessages] = useState([ // sample initial system message
    { id: 1, text: "Hello! I'm your MediScan AI Assistant. How can I help today?" },
  ]) // end sample messages
  const send = () => { // send handler to append message
    if (!message.trim()) return // ignore empty submissions
    setMessages(prev => [...prev, { id: Date.now(), text: message }]) // append message
    setMessage('') // clear input
  } // end send
  return ( // render assistant layout
    <section className="assistant-page"> {/* assistant page wrapper */} 
      <div className="breadcrumb"> {/* breadcrumb */} 
        <span>🏠</span> <span className="crumb"> &gt; Assistant</span> {/* crumb text */} 
      </div> {/* end breadcrumb */} 
      <h1 className="page-title">AI Medical Assistant</h1> {/* page title */} 
      <p className="page-sub">Chat with our AI assistant for medical record queries and administrative help</p> {/* subtitle */} 
      <div className="content-row"> {/* two-column layout */} 
        <aside className="left-col"> {/* left quick actions */} 
          <div className="card small"> {/* quick actions card */} 
            <h3>Quick Actions</h3> {/* heading */} 
            <button className="btn">List diabetic patients</button> {/* action */} 
            <button className="btn">Recent emergencies</button> {/* action */} 
            <button className="btn">Today's appointments</button> {/* action */} 
            <button className="btn">Overdue checkups</button> {/* action */} 
          </div> {/* end card */} 
        </aside> {/* end left */} 
        <section className="center-col"> {/* main chat area */} 
          <div className="card chat-card"> {/* chat card */} 
            <div className="chat-window"> {/* messages container */} 
              {messages.map(m => ( // iterate messages
                <div key={m.id} className="chat-bubble"> {/* single bubble */} 
                  {m.text} {/* bubble text */} 
                </div> // end bubble
              ))} {/* end map */} 
            </div> {/* end chat-window */} 
            <div className="chat-input"> {/* input area */} 
              <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask about patients, appointments, or medical records..." /> {/* text input */} 
              <button onClick={send} className="send-btn">➡</button> {/* send button */} 
            </div> {/* end chat-input */} 
          </div> {/* end chat-card */} 
          <div className="capabilities card"> {/* assistant capabilities card */} 
            <h3>Assistant Capabilities</h3> {/* heading */} 
            <div className="cap-grid"> {/* grid of capabilities */} 
              <div className="cap"> {/* capability block */} 
                <h4>Patient Management</h4> {/* title */} 
                <ul> {/* list */} 
                  <li>Search patient records</li> {/* item */} 
                  <li>View medical histories</li> {/* item */} 
                </ul> {/* end list */} 
              </div> {/* end cap */} 
              <div className="cap"> {/* capability block */} 
                <h4>Medical Queries</h4> {/* title */} 
                <ul> {/* list */} 
                  <li>Condition-based searches</li> {/* item */} 
                  <li>Lab result analysis</li> {/* item */} 
                </ul> {/* end list */} 
              </div> {/* end cap */} 
              <div className="cap"> {/* capability block */} 
                <h4>Administrative Tasks</h4> {/* title */} 
                <ul> {/* list */} 
                  <li>Appointment scheduling</li> {/* item */} 
                  <li>Report generation</li> {/* item */} 
                </ul> {/* end list */} 
              </div> {/* end cap */} 
            </div> {/* end cap-grid */} 
          </div> {/* end capabilities */} 
        </section> {/* end center-col */} 
      </div> {/* end content-row */} 
    </section> // end assistant-page
  ) // end return
} // end component
export default Assistant // export Assistant