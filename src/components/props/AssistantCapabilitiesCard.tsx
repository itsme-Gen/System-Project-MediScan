import React from "react";
import { Bot } from "lucide-react";
import styles from "./AssistantCapabilitiesCard.module.css";

const AssistantCapabilitiesCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Bot size={24} className={styles.icon} />
        <h1 className={styles.title}>Assistant Capabilities</h1>
      </div>
      <p className={styles.subtitle}>What our AI assistant can help you with</p>

      <div className={styles.cardsContainer}>
        {/* Patient Management Card */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Patient Management</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Search patient records
            </li>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              View medical histories
            </li>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Track appointments
            </li>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Monitor vital signs
            </li>
          </ul>
        </div>

        {/* Medical Queries Card */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Medical Queries</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Condition-based searches
            </li>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Medication tracking
            </li>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Lab result analysis
            </li>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Treatment summaries
            </li>
          </ul>
        </div>

        {/* Administrative Tasks Card */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Administrative Tasks</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Appointment scheduling
            </li>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Report generation
            </li>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              System analytics
            </li>
            <li className={styles.listItem}>
              <div className={styles.bullet}></div>
              Workflow optimization
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AssistantCapabilitiesCard;
