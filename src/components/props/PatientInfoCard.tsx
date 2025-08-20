import React from 'react'
import styles from "./PatientInfoCard.module.css"
import { User } from 'lucide-react'

interface PatientInfoProps{
    name:String,
    idNumber:String | number,
    birthDate:number | String
}

const PatientInfoCard :React.FC<PatientInfoProps> = ({name,idNumber ,birthDate}) => {
  return (
    <div className={styles.patient_info_card}>
      <div className ={styles.header}>
        <User/>
        <h3>Personal Information</h3>
      </div>
      <div className={styles.patient_info}>
        <div className={styles.full_name}>
            <h3>Full Name</h3>
            <p>{name}</p>
        </div>

        <div className={styles.idNumber}>
            <h3>ID Number</h3>
            <p>{idNumber}</p>
        </div>

        <div className={styles.birthDate}>
            <h3>Birth Date</h3>
            <p>{birthDate}</p>
        </div>
      </div>
    </div>
  )
}

export default PatientInfoCard
