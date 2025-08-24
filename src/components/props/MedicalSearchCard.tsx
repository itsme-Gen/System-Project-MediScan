import React, { useState } from 'react';
import { Search, Stethoscope } from 'lucide-react';
import styles from './MedicalSearchCard.module.css';

const MedicalSearchCard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sampleQueries = [
    'Show me all diabetic patients',
    'Who had surgery last year?',
    'Patients with high blood pressure',
    'Find recent emergency visits',
    'Show elderly patients with heart conditions',
    'Patients prescribed Metformin'
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const handleSampleQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <Stethoscope className={styles.headerIcon} size={24} />
        <h2 className={styles.headerTitle}>AI-Powered Medical Search</h2>
      </div>

      {/* Subtitle */}
      <p className={styles.subtitle}>
        Ask questions in natural language about patients, conditions, visits, or treatments
      </p>

      {/* Search Input */}
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="e.g., 'Show me all patients with diabetes' or 'Who had surgery in 2023?'"
            className={styles.searchInput}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Sample Queries */}
      <div>
        <div className={styles.sampleHeader}>
          <div className={styles.sampleBullet}>
            <div className={styles.sampleDot}></div>
          </div>
          <span className={styles.sampleTitle}>Try these sample queries:</span>
        </div>

        <div className={styles.sampleList}>
          {sampleQueries.map((query, index) => (
            <button
              key={index}
              onClick={() => handleSampleQuery(query)}
              className={styles.sampleBtn}
            >
              {query}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalSearchCard;
