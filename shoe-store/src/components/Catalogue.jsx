import React from "react";
import Card from "./Card";
import "../styles/catalogue.css";
import { data } from "../catalogueData/catalogueData";

function Catalogue() {
  const catalogueData = data.map((item) => {
    return (
      <Card
        id={item.id}
        img={item.img}
        title={item.title}
        description={item.description}
      />
    );
  });

  console.log(data);

  return (
    <div className="Card" id="catalogue">
      <div className="Card-container">{catalogueData}</div>
    </div>
  );
}

export default Catalogue;
