import React from "react";
import './Activityitem.css'

interface ActivityItemProps {
  name: string;
  status: string;
  time: string;
  statusColor: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ name, status, time, statusColor }) => (
  <div className="activity-item">
    <div className="activity-item-left">
      <div className={`activity-status-dot ${statusColor}`}></div>
      <div className="activity-item-content">
        <p className="activity-name">{name}</p>
        <p className="activity-status">{status}</p>
      </div>
    </div>
    <span className="activity-time">{time}</span>
  </div>
);

export default ActivityItem;