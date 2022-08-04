import React from "react";
import { Card } from "antd";
import { StatusData } from "../data";
import "../css/CardComponent.css";
import { PhoneOutlined, BookOutlined, CheckOutlined } from "@ant-design/icons";

const CardComponent = () => {
  return (
    <div className="card_wrapper">
      {StatusData.map((item) => {
        const { productStatus, date, liveStatus, id, employeename } = item;
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
                {id === 3 && <BookOutlined className="cardicon second" />}
              </span>
              <div>
                <div>
                  <p>{productStatus}</p>
                  <p>
                    {liveStatus} <span>{employeename}</span>
                  </p>
                  <p>{date}</p>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CardComponent;
