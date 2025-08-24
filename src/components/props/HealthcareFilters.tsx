import React from 'react';
import { Filter, User, Clock, AlertTriangle, FileText } from 'lucide-react';
import styles from './HealthcareFilters.module.css';

interface QuickFilterProps {
  icon: React.ReactNode;
  title: string;
  count: string;
  countLabel: string;
}

const QuickFilter: React.FC<QuickFilterProps> = ({ icon, title, count, countLabel }) => {
  return (
    <div className={styles.quickFilter}>
      <div className={styles.quickFilterIcon}>{icon}</div>
      <div className={styles.quickFilterTitle}>{title}</div>
      <div className={styles.quickFilterCount}>
        {count} {countLabel}
      </div>
    </div>
  );
};

interface AdvancedFilterButtonProps {
  children: string;
}

const AdvancedFilterButton: React.FC<AdvancedFilterButtonProps> = ({ children }) => {
  return <button className={styles.advancedButton}>{children}</button>;
};

const HealthcareFilters: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Filter size={20} color="#495057" />
        <h2 className={styles.title}>Quick Filters</h2>
      </div>

      <p className={styles.subtitle}>Common search categories for quick access</p>

      <div className={styles.quickFilters}>
        <QuickFilter
          icon={<User size={24} />}
          title="Diabetic Patients"
          count="247"
          countLabel="patients"
        />
        <QuickFilter
          icon={<Clock size={24} />}
          title="Emergency Visits"
          count="89"
          countLabel="this month"
        />
        <QuickFilter
          icon={<AlertTriangle size={24} />}
          title="Allergy Alerts"
          count="156"
          countLabel="patients"
        />
        <QuickFilter
          icon={<FileText size={24} />}
          title="Lab Results"
          count="342"
          countLabel="pending"
        />
      </div>

      <div className={styles.advancedSection}>
        <h3 className={styles.advancedTitle}>Advanced Filters</h3>
        <div className={styles.advancedFilters}>
          <AdvancedFilterButton>Senior Patients (65+)</AdvancedFilterButton>
          <AdvancedFilterButton>Chronic Conditions</AdvancedFilterButton>
          <AdvancedFilterButton>Upcoming Appointments</AdvancedFilterButton>
          <AdvancedFilterButton>Overdue Checkups</AdvancedFilterButton>
        </div>
      </div>
    </div>
  );
};

export default HealthcareFilters;
