import React, { useState } from 'react'
import styles from "./CurrentMedication.module.css"
import { Pill, Trash } from 'lucide-react'

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

    const [records,setRecords] = useState<currentMedicationProps[]>([])

       const deleteRecord = (index: number) => {
        setRecords((prevRecords) => prevRecords.filter((_, i) => i !== index));
      };

    const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target
        setFormData((prev) => ({...prev,[name]:value}))
    }

    const handleFormSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        if(formData.medicationName && formData.dosage && formData.frequency && formData.prescribeBy){
          setRecords((prev) => [...prev,formData])
        }

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

       {/* Display all records */}
      <div className={styles.records}>
        {records.length > 0 ? (
          records.map((record, index) => (
            <div key={index} className={styles.record_item}>
              <p><strong>Medication Name:</strong> {record.medicationName}</p>
              <p><strong>Dosage:</strong> {record.dosage}</p>
              <p><strong>Frequency:</strong> {record.frequency}</p>
              <p><strong>Prescribe By:</strong> {record.prescribeBy}</p>
              <button onClick={() => deleteRecord(index)}>
                <Trash
                style={{
                  color:"red"
                }}
                />
                
              </button>
            </div>

          ))
        ) : (
          null
        )}
      </div>
    </div>
  )
}

export default CurrentMedication
