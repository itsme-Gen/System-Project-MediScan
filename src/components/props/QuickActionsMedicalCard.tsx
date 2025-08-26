import React from 'react';
import { Settings, FileText, Zap, Calendar, TrendingUp } from 'lucide-react';
import styles from './QuickActionsMedicalCard.module.css';

const QuickActionsMedicalCard: React.FC = () => {
  const actions = [
    { icon: FileText, text: "List diabetic patients" },
    { icon: Zap, text: "Recent emergencies" },
    { icon: Calendar, text: "Today's appointments" },
    { icon: TrendingUp, text: "Overdue checkups" }
  ];

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <Settings size={20} className={styles.headerIcon} />
        <h3 className={styles.title}>Quick Actions</h3>
      </div>

      {/* Subtitle */}
      <p className={styles.subtitle}>Common medical queries</p>

      {/* Action Items */}
      <div className={styles.actions}>
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <button key={index} className={styles.actionButton}>
              <IconComponent size={16} className={styles.actionIcon} />
              {action.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionsMedicalCard;
