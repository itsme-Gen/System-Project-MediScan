import React from "react";
import './SystemStatus.css';

interface SystemStatusProps {
  service: string;
  status: string;
  statusColor: string;
}

const SystemStatus: React.FC<SystemStatusProps> = ({ service, status, statusColor }) => (
  <div className="system-status-item">
    <span className="system-service">{service}</span>
    <span className={`system-status ${statusColor}`}>
      {status}
    </span>
  </div>
);

export default SystemStatus;