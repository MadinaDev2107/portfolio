import React from "react";
import { navigationLinks } from "./Information";



interface BottomNavProps {
  activeSection: string;
  handleNavigation: (id: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({
  activeSection,
  handleNavigation,
}) => {
  return (
    <div className="bottom-nav">
      <ul>
        {navigationLinks.map(({ id, label, icon }) => (
          <li key={id}>
            <button
              className={`nav-button ${activeSection === id ? "active" : ""}`}
              onClick={() => handleNavigation(id)}
            >
              <i className={icon}></i> {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomNav;
