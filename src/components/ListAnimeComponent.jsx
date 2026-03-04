import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardComponent from "./CardComponent";

function ListAnimeComponent({ datas }) {
    
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {datas.map((data) => (
          <Col xs={12} sm={6} md={6} lg={6} xl={4} key={data.id}>
            <CardComponent img={data.image} title={data.title} id={data.id}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListAnimeComponent;
