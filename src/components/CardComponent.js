import React from "react";
import { Card } from "antd";
import { StatusData } from "../data";

const CardComponent = () => {
  return (
    <div>
      {StatusData.map((item) => {
        const { productStatus, date, liveStatus, id } = item;
        return (
          <Card style={{ width: 300 }} key={id}>
            <p>{productStatus}</p>
            <p>{liveStatus}</p>
            <p>{date}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default CardComponent;
