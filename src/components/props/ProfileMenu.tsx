import React from "react";
import { User, Settings, LogOut } from "lucide-react";
import "./ProfileMenu.css";

interface ProfileMenuProps {
  show: boolean;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="profile-menu">
      <div className="menu-items">
        <button>
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
