import React from "react";
import './StatCard.css'

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, changeType, icon }) => (
  <div className="stat-card">
    <div className="stat-card-header">
      <h3 className="stat-card-title">{title}</h3>
      <div className="stat-card-icon">
        {icon}
      </div>
    </div>
    <div className="stat-card-value">
      <span>{value}</span>
    </div>
    <div className="stat-card-change">
      <span className={`change-${changeType}`}>{change}</span>
      <span className="change-label">from yesterday</span>
    </div>
  </div>
);

export default StatCard;