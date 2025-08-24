import React from 'react';
import { Users, TrendingUp } from 'lucide-react';
import styles from './TotalPatientCard.module.css';

interface PatientCardProps {
  totalPatients?: number;
  weeklyIncrease?: number;
}

const TotalPatientCard: React.FC<PatientCardProps> = ({ 
  totalPatients = 1247, 
  weeklyIncrease = 24 
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Total Patients</h3>
          <div className={styles.number}>{totalPatients.toLocaleString()}</div>
        </div>
        <div className={styles.iconContainer}>
          <Users className={styles.icon} />
        </div>
      </div>
      
      <div className={styles.footer}>
        <TrendingUp className={styles.trendIcon} />
        <span className={styles.increaseText}>+{weeklyIncrease} this week</span>
      </div>
    </div>
  );
};

export default TotalPatientCard;
