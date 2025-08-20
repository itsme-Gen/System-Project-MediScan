import React, { useState } from 'react';
import styles from "./MedicalHistoryCard.module.css";
import { Heart } from 'lucide-react';

interface MedicalHistoryProps {
  condition: string;
  dob: string;
  status: string;
}

const MedicalHistoryCard: React.FC = () => {
  const [formData, setFormData] = useState<MedicalHistoryProps>({
    condition: "",
    dob: "",
    status: ""
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);

    setFormData({
        condition:"",
        dob:"",
        status:""
    })
  };

  return (
    <div className={styles.medical_history_card}>
      <div className={styles.header}>
        <Heart />
        <h3>Medical History</h3>
      </div>
      <div className="subtitle">
        <p>Add Patient medical condition and history</p>
      </div>

      <form className={styles.input_fields} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Condition"
          name="condition"
          onChange={handleFormChange}
          value={formData.condition}
        />

        <input
          type="date"
          name="dob"
          onChange={handleFormChange}
          value={formData.dob}
        />

        <select
          name="status"
          onChange={handleFormChange}
          value={formData.status}
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Resolved">Resolved</option>
          <option value="Chronic">Chronic</option>
        </select>

        <button id="add_button" type="submit">Add</button>
      </form>
    </div>
  );
};

export default MedicalHistoryCard;
