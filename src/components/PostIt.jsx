import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class PostIt extends Component {
    state = {task: '',
        date:'',
        important: false
    }
    
  render() {
    return (
      <Card className="m-5">
      
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Done</Button>
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default PostIt;
