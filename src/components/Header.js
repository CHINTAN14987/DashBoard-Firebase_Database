import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="Navbar_Progress">
      <div className="header_container">
        <div className="flex_wrapper">
          <div className="status_button_left">
            <span>Status 1</span>
          </div>
          <div className="button_traingle"></div>
        </div>

        <div className="flex_wrapper">
          <div className="new_button_left new">
            <span>New</span>
          </div>
          <div className="button_traingle newtraingle"></div>
        </div>
        <div className="flex_wrapper">
          <div className="new_button_left working">
            <span>Working</span>
          </div>
          <div className="button_traingle workingtriangle"></div>
        </div>
        <div className="flex_wrapper">
          <div className="new_button_left nurturing">
            <span>Nurturing</span>
          </div>
          <div className="button_traingle nurturingtriangle"></div>
        </div>
        <div className="flex_wrapper">
          <div className="new_button_left converted">
            <span>Converted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
