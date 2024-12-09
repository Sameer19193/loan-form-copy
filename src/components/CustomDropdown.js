import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Added FaChevronUp for upward icon
import "../styles/CustomDropdown.css";

const CustomDropdown = ({ name, value, options, placeholder, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  return (
    <div className="form-group custom-select-container">
      <div className="custom-dropdown" onClick={toggleDropdown}>
        <span>{value || placeholder}</span>
        {/* Toggle icon based on dropdown state */}
        {isOpen ? (
          <FaChevronUp className="dropdown-icon" />
        ) : (
          <FaChevronDown className="dropdown-icon" />
        )}
      </div>
      {isOpen && (
        <div className="custom-dropdown-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="custom-dropdown-option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default CustomDropdown;
