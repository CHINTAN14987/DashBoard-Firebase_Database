import React from "react";
import "../css/DisplayedTasks.css";
import { data } from "../data";
import { useSelector } from "react-redux";

const DisplayedTasks = () => {
  const Addedvalue = useSelector((state) => state.task.item);
  return (
    <div>
      <div className="DisplayedResult_Table_Header">
        <span>#</span>
        <span>Type</span>
        <span>Assigned To</span>
        <span>Due Date</span>
        <span>Status</span>
      </div>
      <div>
        {data.map((item) => {
          const {
            id,
            Status,
            type,
            ["Assigned To"]: Assigned,
            ["Due Date"]: DueDate,
          } = item;
          return (
            <div key={id} className="taskRow">
              <span>{id}</span>
              <span>{type}</span>
              <span>{Assigned} To</span>
              <span>{DueDate}</span>
              <span>{Status}</span>
            </div>
          );
        })}
        {Addedvalue ? (
          <div className="addeditems_wrapper">
            {Addedvalue.map((item) => {
              return (
                <div key={item.id}>
                  <span>{item.id}</span>
                  <span>{item.newtask}</span>
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
        <button>View More</button>
      </div>
    </div>
  );
};

export default DisplayedTasks;
