import { LogOut, Settings, User } from "lucide-react";

interface ProfileMenuProps {
  show: boolean;
  handleLogout: () => void; // add this
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ show }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload(); // optional: refresh to reset state
  };

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

        <button onClick={handleLogout}>
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu
