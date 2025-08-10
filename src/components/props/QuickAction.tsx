import React from "react";
import './QuickAction.css'

interface QuickActionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
}

const QuickAction: React.FC<QuickActionProps> = ({ title, description, icon, bgColor }) => (
  <div className="quick-action">
    <div className={`quick-action-icon ${bgColor}`}>
      {icon}
    </div>
    <h3 className="quick-action-title">{title}</h3>
    <p className="quick-action-description">{description}</p>
  </div>
);

export default QuickAction;