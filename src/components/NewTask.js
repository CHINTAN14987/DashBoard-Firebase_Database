import React, { useState } from "react";
import { DatePicker } from "antd";
import { Select, Input } from "antd";
import "../css/NewTask.css";
import { useDispatch, useSelector } from "react-redux";
import { taskactions } from "./features/taskSlice";
const { Option } = Select;

const NewTask = () => {
  const [input, setInput] = useState({
    subject: "",
    body: "",
  });
  const [selectedAssignedTo, setSelectedAssignedTo] = useState("");
  const [selectedNewTask, setSelectedNewTask] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [remindDate, setRemindDate] = useState("");
  const [finaliseddata, setFinalizedData] = useState([]);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.task.item);

  const onChangeStartDate = (date, dateString) => {
    setStartDate(dateString);
  };
  const onChangeEndDate = (date, dateString) => {
    setEndDate(dateString);
  };
  const onChangeRemindDate = (date, dateString) => {
    setRemindDate(dateString);
  };
  const handleValueChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    let newArr = [];
    dispatch(
      taskactions.taskCreation({
        id: new Date().getTime(),
        newtask: selectedNewTask,
        aissgnedTo: selectedAssignedTo,
        startDate: startDate,
        endDate: endDate,
        remindDate: remindDate,
        body: input.body,
        subject: input.subject,
      })
    );

    setFinalizedData(newArr);
  };

  const handleCancel = () => {
    setSelectedNewTask("");
    setSelectedAssignedTo("");
    setEndDate([]);
    setStartDate("");
    setRemindDate("");
    setInput("");
  };
  const handleSelectTask = (value) => {
    setSelectedNewTask(value);
  };
  const handleSelectAssignedTo = (value) => {
    setSelectedAssignedTo(value);
  };

  return (
    <div className="Form_Wrapper">
      {console.log(value, "redux")}
      <div className="">
        <div className="TaskSelect">
          <label>New Task Type</label>
          <Select
            value={selectedNewTask}
            onChange={handleSelectTask}
            name="taskType"
          >
            <Option value="task1" label="task1">
              Task1
            </Option>
            <Option value="task2" label="task2">
              Task2
            </Option>
          </Select>
        </div>
        {console.log(value)}
        <div className="AssignedTo_wrapper">
          <label>Assigned To</label>

          <Select value={selectedAssignedTo} onChange={handleSelectAssignedTo}>
            <Option value="John">John</Option>
            <Option value="George">George</Option>
          </Select>
        </div>
        <div className="date_option_wrapper">
          <div className="startDate_Wrapper">
            <label>Start Date</label>
            <DatePicker
              placeholder="13-July-2022"
              onChange={onChangeStartDate}
            />
          </div>
          <div className="endDate_Wrapper">
            <label>End Date</label>
            <DatePicker
              allowClear={true}
              placeholder="10-Aug 2022"
              onChange={onChangeEndDate}
            />
          </div>
        </div>
        <div className="RemindDate_Wrapper">
          <label>Remind Me</label>
          <DatePicker placeholder="10-Aug 2022" onChange={onChangeRemindDate} />
        </div>
      </div>
      <div className="right_side_form">
        <div className="subject_wrapper">
          <label>Subject</label>
          <Input
            value={input.subject}
            onChange={handleValueChange}
            name="subject"
          />
        </div>
        <div className="detail_text_Area_Wrapper">
          <label>Detail</label>
          <Input.TextArea
            showCount
            maxLength={200}
            style={{ height: "10rem" }}
            value={input.body}
            onChange={handleValueChange}
            name="body"
          />
        </div>
        <div className="button_wrapper">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSubmit}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
