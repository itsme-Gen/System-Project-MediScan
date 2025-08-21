import React, { useState } from 'react';
import styles from "./MedicalHistoryCard.module.css";
import { Heart, Trash } from 'lucide-react';

interface MedicalHistoryProps {
  condition: string;
  date: string;
  status: string;
}

const MedicalHistoryCard: React.FC = () => {
  const [formData, setFormData] = useState<MedicalHistoryProps>({
    condition: "",
    date: "",
    status: ""
  });

  const deleteRecord = (index: number) => {
    setRecords((prevRecords) => prevRecords.filter((_, i) => i !== index));
  };


  const [records, setRecords] = useState<MedicalHistoryProps[]>([]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.condition && formData.date && formData.status) {
      setRecords((prev) => [...prev, formData]); 
    }

    setFormData({
      condition: "",
      date: "",
      status: ""
    });
    
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
          name="date"
          onChange={handleFormChange}
          value={formData.date}
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

      {/* Display all records */}
      <div className={styles.records}>
        {records.length > 0 ? (
          records.map((record, index) => (
            <div key={index} className={styles.record_item}>
              <p><strong>Condition:</strong> {record.condition}</p>
              <p><strong>Date:</strong> {record.date}</p>
              <p><strong>Status:</strong> {record.status}</p>
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
  );
};

export default MedicalHistoryCard;
