import React, { useState } from "react";
import { Card } from "antd";
import { StatusData } from "../data";
import "../css/CardComponent.css";
import {
  PhoneOutlined,
  BookOutlined,
  CheckOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { DatePicker } from "antd";

const CardComponent = () => {
  const [startDate, setStartDate] = useState("");
  const onChangeStartDate = (date, dateString) => {
    setStartDate(dateString);
  };

  const filterData = Object.values(StatusData).filter((item) => {
    return item.date === startDate;
  });
  console.log(filterData, "hello");

  return (
    <>
      <div className="card_container">
        <div className="cardInput">
          <DatePicker
            style={{
              borderRadius: "4px",
              height: "50px",
              width: "30rem",
              border: " 2px solid rgb(222, 229, 241)",
            }}
            placeholder="Filter by Date"
            onChange={onChangeStartDate}
          />
        </div>
        {console.log(startDate)}
        <div className="card_wrapper">
          {filterData.length > 0
            ? filterData.map((item) => {
                const {
                  productStatus,
                  date,
                  liveStatus,
                  id,
                  employeename,
                  time,
                } = item;
                return (
                  <Card style={{ width: 300 }} key={id}>
                    <div className="card">
                      <span className="icon_wrapper">
                        {(id === 4 || id === 1) && (
                          <PhoneOutlined className="cardicon" />
                        )}

                        {(id === 2 || id === 5) && (
                          <CheckOutlined className="cardicon third" />
                        )}
                        {id === 3 && (
                          <BookOutlined className="cardicon second" />
                        )}
                      </span>
                      <div>
                        <div>
                          <p className="productStatus">{productStatus}</p>
                          <p className="liveStatus">
                            {liveStatus}{" "}
                            <span className="name">{employeename}</span>
                          </p>
                          <p className="statusDate">
                            {date} {time}
                          </p>
                          <div className="cardbodyicon">
                            <DownOutlined />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })
            : StatusData.map((item) => {
                const {
                  productStatus,
                  date,
                  liveStatus,
                  id,
                  employeename,
                  time,
                } = item;
                return (
                  <Card style={{ width: 300 }} key={id}>
                    <div className="card">
                      <span className="icon_wrapper">
                        {(id === 4 || id === 1) && (
                          <PhoneOutlined className="cardicon" />
                        )}

                        {(id === 2 || id === 5) && (
                          <CheckOutlined className="cardicon third" />
                        )}
                        {id === 3 && (
                          <BookOutlined className="cardicon second" />
                        )}
                      </span>
                      <div>
                        <div>
                          <p className="productStatus">{productStatus}</p>
                          <p className="liveStatus">
                            {liveStatus}{" "}
                            <span className="name">{employeename}</span>
                          </p>
                          <p className="statusDate">
                            {date} {time}
                          </p>
                          <div className="cardbodyicon">
                            <DownOutlined />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
