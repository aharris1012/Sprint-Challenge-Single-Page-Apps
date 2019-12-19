import React from "react";
import {Col,Row,Card,CardTitle,CardText, CardImg} from "reactstrap";

// export default function CharacterCard() {
//   // return <span>todo: character</span>;

  const CharacterCard= props=>{
    return(
      <div className="card">
        <Row>
          <Col key={props.id}>
            <Card className="info">
              <div className="image">
                <CardImg width="100%" src={props.person.image}/>
              </div>
              <div className ="thegang">
                <CardTitle>Name: {props.person.name}</CardTitle>
                <CardText>{props.person.species}</CardText>
              </div>
          
            </Card>
          </Col>
        </Row>
      </div>
    )
  }

export default CharacterCard;