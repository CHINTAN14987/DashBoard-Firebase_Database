import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { Select, Input } from "antd";

import "../css/NewTask.css";
const { Option } = Select;
const NewTask = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="Form_Wrapper">
      <div className="">
        <div className="TaskSelect">
          <label>New Task Type</label>
          <Select placeholder="">
            <Option value="china">Task1</Option>
            <Option value="usa">Task2</Option>
          </Select>
        </div>
        <div className="AssignedTo_wrapper">
          <label>Assigned To</label>

          <Select placeholder="">
            <Option value="china">Task1</Option>
            <Option value="usa">Task2</Option>
          </Select>
        </div>
        <div className="date_option_wrapper">
          <div className="startDate_Wrapper">
            <label>Start Date</label>
            <DatePicker placeholder="13-July-2022" onChange={onChange} />
          </div>
          <div className="endDate_Wrapper">
            <label>End Date</label>
            <DatePicker placeholder="10-Aug 2022" onChange={onChange} />
          </div>
        </div>
        <div className="RemindDate_Wrapper">
          <label>Remind Me</label>
          <DatePicker placeholder="10-Aug 2022" onChange={onChange} />
        </div>
      </div>
      <div className="right_side_form">
        <div className="subject_wrapper">
          <label>Subject</label>
          <Input />
        </div>
        <div className="detail_text_Area_Wrapper">
          <label>Detail</label>
          <Input.TextArea
            showCount
            maxLength={200}
            style={{ height: "10rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NewTask;
