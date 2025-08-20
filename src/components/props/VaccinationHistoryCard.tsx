import React, { useState } from 'react'
import styles from "./Vaccination.module.css"
import { Syringe } from 'lucide-react'

interface vaccinationHistoryProps{
  vaccineName:string,
  firstDose:string,
  secondDose:string
}

const VaccinationHistory:React.FC = () => {
  const [formData,setFormData] = useState<vaccinationHistoryProps>({
    vaccineName:"",
    firstDose:"",
    secondDose:""
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name,value} = e.target
    setFormData((prev) =>({...prev,[name]:value}))
  }
  const handleFormSubmit = ( e: React.FormEvent) =>{
    e.preventDefault()
    console.log(formData);

    setFormData({
      vaccineName:"",
      firstDose:"",
      secondDose:""
    })
    
  } 
  return (
    <div className={styles.vaccination_history_card} onSubmit={handleFormSubmit}>
      <div className={styles.header}>
        <Syringe />
        <h3>Vaccinations</h3>
      </div>
      <div className="subtitle">
        <p>Track Vaccination History</p>
      </div>

      <form className={styles.input_fields} >
        <input
          type="text"
          placeholder="Vaccine Name"
          name="vaccineName"
          value={formData.vaccineName}
          onChange={handleFormChange}
       
        />
        <div className={styles.first_dose}>
          <input 
          type="date"
          name='firstDose'
          value={formData.firstDose}
          onChange={handleFormChange}
         />
        </div>

        <div className={styles.second_dose}>
          <input 
          type="date"
          name='secondDose'
          value={formData.secondDose}
          onChange={handleFormChange}
          />
        </div>

        <button id="add_button" type="submit">Add</button>
      </form>
    </div>
  )
}

export default VaccinationHistory
