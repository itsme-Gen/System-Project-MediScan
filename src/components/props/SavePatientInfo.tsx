import React from 'react'
import styles from "./SavePatientInfo.module.css"
import { Save } from 'lucide-react'

const SavePatientInfo:React.FC = () => {
  return (
    <div className={styles.container}>
         <button type='submit' className={styles.save_button}><Save/>Save Medical Information</button>
        <p>Medical Record will be securely saved to patient's records</p>
    </div>
  )
}

export default SavePatientInfo
