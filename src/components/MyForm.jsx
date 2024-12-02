import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class MyForm extends Component {
    state ={
        toDo:{
            task: '',
            date: '',
            important: false
        }
    }
  render() {
    const today = new Date().toISOString().split("T")[0];
    const { task, date, important } = this.state.toDo;
    return (
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Task:</Form.Label>
          <Form.Control type="text" placeholder="Remember to.." 
          value={task}
          onChange={(e)=>{this.setState({toDo:{...this.state.toDo,
            task:e.target.value
          }})}}/>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="date" placeholder="When?" min={today}
          value={date} 
          onChange={(e)=>{this.setState({toDo:{...this.state.toDo,
            date:e.target.value
          }})}}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Check type="checkbox" label="Mark as important"
          checked={important} 
          onChange={(e)=>{this.setState({toDo:{...this.state.toDo,
            important:e.target.checked
          }})}}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    );
  }
}

export default MyForm;
