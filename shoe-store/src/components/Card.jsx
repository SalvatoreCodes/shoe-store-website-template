import React from "react";
import Button from "react-bootstrap/Button";
import CardComponent from "react-bootstrap/Card";
import "../styles/catalogue.css";

function Card(props) {
  return (
    <CardComponent style={{ width: "18rem" }}>
      <CardComponent.Img variant="top" src={props.img} className="Card-image" />
      <CardComponent.Body>
        <CardComponent.Title>{props.title}</CardComponent.Title>
        <CardComponent.Text>{props.description}</CardComponent.Text>
        <Button variant="primary">Buy Now</Button>
      </CardComponent.Body>
    </CardComponent>
  );
}

export default Card;
