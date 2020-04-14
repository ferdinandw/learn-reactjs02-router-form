import React, { Component } from 'react';
import {Button, Card, Col} from 'react-bootstrap';


const Item = (props) => {
    const {data } = props
    return(
        <Col>
        <Card>
  <Card.Img variant="top" src={`http://35.240.201.155:3000/${data.images[0]}`} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        
        
        
        
        </Col>
    )
}


export default Item