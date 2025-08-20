import React, { useState } from 'react'
import styles from "./LabResult.module.css";
import {FileText} from 'lucide-react'

interface labResultProps{
    testName:string,
    date:string,
    result:string,
    referenceRange:string
}

const LabResult = () => {

    const [formData,setFormData] = useState<labResultProps>({
        testName:"",
        date:"",
        result:"",
        referenceRange:""
    })

    const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setFormData((prev) => ({...prev,[name]:value}) )
    }

    const handleFormSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        console.log(formData)

        setFormData({
            testName:"",
            date:"",
            result:"",
            referenceRange:""
        })
    }
  return (
    <div className={styles.LabResult_card}>
      <div className={styles.header}>
        <FileText/>
        <h3>Lab Result</h3>
      </div>
      <div className="subtitle">
        <p>Laboratory Lab resultsand reports</p>
      </div>

      <form className={styles.input_fields} onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Test Name"
          name="testName"
          value={formData.testName}
          onChange={handleFormChange}

      
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleFormChange}
   
        />

        <input
          type="text"
          placeholder='Result'
          name="result"
          value={formData.result}
          onChange={handleFormChange}
      
        />

        <input
          type="text"
          placeholder='Reference range'
          name="referanceRage"
          value={formData.referenceRange}
          onChange={handleFormChange}
        />
 
        <button id="add_button" type="submit">Add</button>
      </form>
    </div>
  )
}

export default LabResult
