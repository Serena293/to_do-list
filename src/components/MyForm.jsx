import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class MyForm extends Component {
    render() {
        return (
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Task:</Form.Label>
              <Form.Control type="email" placeholder="Remember to.." />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="date" placeholder="When?" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Mark as important" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Save
            </Button>
          </Form>
        );
        
      }
    }

    export default MyForm