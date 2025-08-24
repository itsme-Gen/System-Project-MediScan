import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import styles from './RecentVisitsCard.module.css';

const RecentVisitsCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Visits</h3>
        <Clock size={20} className={styles.clockIcon} />
      </div>

      <div className={styles.value}>156</div>

      <div className={styles.trend}>
        <TrendingUp size={14} className={styles.trendIcon} />
        <span className={styles.trendText}>+12% this month</span>
      </div>
    </div>
  );
};

export default RecentVisitsCard;
