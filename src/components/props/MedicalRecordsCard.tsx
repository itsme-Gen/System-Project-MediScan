import React from 'react';
import { FileText } from 'lucide-react';
import styles from './MedicalRecordsCard.module.css';

const MedicalRecordsCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Medical Records</h3>
          <div className={styles.number}>5,890</div>
          <p className={styles.increment}>
            <span className={styles.arrow}>↗</span>
            +156 new records
          </p>
        </div>
        <div className={styles.iconContainer}>
          <FileText size={20} color="#059669" />
        </div>
      </div>
    </div>
  );
};

export default MedicalRecordsCard;
