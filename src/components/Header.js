import React from "react";
import "../css/Header.css";
import { CheckOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="Navbar_Progress">
      <div className="header_container">
        <div className="flex_wrapper">
          <div className="status_button_left">
            <span className="heading">Status 1</span>
          </div>
          <div className="button_traingle"></div>
          <button className="checkboxwrapper">
            <CheckOutlined className="checkbox" />
          </button>
        </div>

        <div className="flex_wrapper">
          <div className="outline">
            <div className="new_button_left new">
              <span className="heading">New</span>
            </div>
          </div>

          <div className="button_traingle newtraingle"></div>
          <button className="checkboxwrapper"></button>
        </div>
        <div className="flex_wrapper">
          <div className="new_button_left working">
            <span className="heading">Working</span>
          </div>
          <div className="button_traingle workingtriangle"></div>
          <button className="checkboxwrapper"></button>
        </div>
        <div className="flex_wrapper">
          <div className="new_button_left nurturing">
            <span className="heading">Nurturing</span>
          </div>
          <div className="button_traingle nurturingtriangle"></div>
          <button className="checkboxwrapper"></button>
        </div>
        <div className="flex_wrapper headerContentLast">
          <div className="headerContentLast_innerwrapper">
            <div className="new_button_left converted">
              <span className="heading">Converted</span>
            </div>
            <button className="checkboxwrapper"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
