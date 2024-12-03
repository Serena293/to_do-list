import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class PostIt extends Component {

    
  render() {
    const { task, date, important } = this.props.task;
    return (
      <Card className="m-5">
      
        <Card.Body>
          <Card.Title>{task}</Card.Title>
         <p>{date}</p>
         {important && <stong>Important</stong>}
         <div className="mt-3 d-flex justify-content-around">
          <Button variant="primary" >Done</Button>
          <Button variant="primary">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default PostIt;
