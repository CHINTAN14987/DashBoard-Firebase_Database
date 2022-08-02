import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="flex_wrapper">
        <div className="status_button_left">
          <span>Status 1</span>
        </div>
        <div className="button_traingle"></div>
      </div>

      <div className="flex_wrapper">
        <div className="new_button_left">
          <span>New</span>
        </div>
        <div className="button_traingle"></div>
      </div>
      <div className="flex_wrapper">
        <div className="new_button_left">
          <span></span>
        </div>
        <div className="button_traingle"></div>
      </div>
      <div className="flex_wrapper">
        <div className="new_button_left">
          <span></span>
        </div>
        <div className="button_traingle"></div>
      </div>
      <div className="flex_wrapper">
        <div className="new_button_left">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
