import React from "react";
import { User, Settings, LogOut } from "lucide-react";
import "./ProfileMenuCard.css";
import { useNavigate } from "react-router-dom";

interface ProfileMenuProps {
  show: boolean;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ show }) => {
  if (!show) return null;

  const navigate = useNavigate();

  return (
    <div className="profile-menu">
      <div className="menu-items">
        <button onClick={()=>{navigate('/profile'); window.scrollTo(0,0);}}>
          <User size={16} />
          <span>Profile</span>
        </button>

        <button>
          <Settings size={16} />
          <span>Settings</span>
        </button>

        <button>
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
