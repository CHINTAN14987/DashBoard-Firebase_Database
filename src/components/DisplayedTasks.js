import React from "react";
import "../css/DisplayedTasks.css";
import { data } from "../data";
import { useDispatch, useSelector } from "react-redux";

const DisplayedTasks = () => {
  const dispatch = useDispatch();
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
        <button>View More</button>

        {Addedvalue ? (
          <>
            {Addedvalue.map((item) => {
              return (
                <div key={item.id}>
                  <span>{item.id}</span>
                  {/* <span>{item.type}</span> */}
                  <span>{item.aissgnedTo} To</span>
                  <span>{item.endDate}</span>
                  {/* <span>{Status}</span> */}
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DisplayedTasks;
