import React from "react";
import "../css/DisplayedTasks.css";
import { data } from "../data";
import { useSelector } from "react-redux";

const DisplayedTasks = () => {
  const Addedvalue = useSelector((state) => state.task.item);
  return (
    <div>
      <h3 className="displayedTask_Heading">Task List</h3>
      <div className="DisplayedResult_Table_Header">
        <span>#</span>
        <span>Subject</span>
        <span>Type</span>
        <span>Assigned To</span>
        <span>Due Date</span>
        <span>Status</span>
      </div>
      <div className="row">
        {Addedvalue ? (
          <div className="addeditems_wrapper">
            {Addedvalue.map((item) => {
              return (
                <div key={item.id} className="taskRow">
                  <span>{item.id}</span>
                  <span
                    style={
                      item.newtask === "Sample"
                        ? { color: "red" }
                        : { color: "blue" }
                    }
                  >
                    {item.newtask}
                  </span>
                  <span>{item.aissgnedTo} </span>
                  <span>{item.endDate}</span>
                  <span>{item.subject}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
        {data.map((item) => {
          const {
            id,
            Status,
            type,
            subject,
            ["Assigned To"]: Assigned,
            ["Due Date"]: DueDate,
          } = item;
          return (
            <div key={id} className="taskRow">
              <span>{id}</span>
              <span
                style={
                  subject === "Sample" ? { color: "blue" } : { color: "red" }
                }
              >
                {subject}
              </span>
              <span>{type}</span>
              <span>{Assigned} To</span>
              <span>{DueDate}</span>
              <span>{Status}</span>
            </div>
          );
        })}
      </div>
      <div className="viewButton_wrapper">
        <button className="viewButton">View More</button>
      </div>
    </div>
  );
};

export default DisplayedTasks;
