import React, { useState } from 'react'
import styles from "./CurrentMedication.module.css"
import { Pill } from 'lucide-react'

interface currentMedicationProps{
    medicationName:string,
    dosage:string,
    frequency:string,
    prescribeBy:string
}


const CurrentMedication = () => {
    const[formData,setFormData] = useState<currentMedicationProps>({
        medicationName:"",
        dosage:"",
        frequency:"",
        prescribeBy:""
    })

    const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target
        setFormData((prev) => ({...prev,[name]:value}))
    }

    const handleFormSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        console.log(formData)

        setFormData({
            medicationName:"",
            dosage:"",
            frequency:"",
            prescribeBy:""

        })
    }

  return (
    <div className={styles.currentMedication_history_card}>
      <div className={styles.header}>
        <Pill/>
        <h3>Current Medication</h3>
      </div>
      <div className="subtitle">
        <p>List of current medication and prescription</p>
      </div>

      <form className={styles.input_fields} onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Medication Name"
          name="medicationName"
          value={formData.medicationName}
          onChange={handleFormChange}
      
        />

        <input
          type="text"
          placeholder='Dosage'
          name="dosage"
          value={formData.dosage}
          onChange={handleFormChange}
   
        />

        <input
          type="text"
          placeholder='Frequency'
          name="frequency"
          value={formData.frequency}
          onChange={handleFormChange}
        />

        <input
          type="text"
          placeholder='Prescribe by'
          name="prescribeBy"
          value={formData.prescribeBy}
          onChange={handleFormChange}
        />
 
        <button id="add_button" type="submit">Add</button>
      </form>
    </div>
  )
}

export default CurrentMedication
