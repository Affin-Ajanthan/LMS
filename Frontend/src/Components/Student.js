
import React, { useState, useEffect } from "react";
import { Button, Form, Table , Divider, Message} from "semantic-ui-react";
import axios from "axios";

const Student = () => {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios.get("https://localhost:5001/student").then((response) => {
      setStudents(response.data);
    });
  }, []);
  
  const submitHandler=(event)=>{
    event.preventDefault();
    const data = {
      name: name,
      regNo: reg
    }

    axios.post("https://localhost:5001/student", data)
    .catch(err => {
      setError(err.response.data.errors);
    });
    

  }

  const deleteHandler=(id)=>{
    axios.delete(`https://localhost:5001/student/${id}`)
    .then((response) => {
      console.log(response.data);

    });
  }



  return (
  <div class="ui inverted segment" style={{"backgroundColor":"#003166", "marginTop":"100px"}}>
  <div class="ui inverted form" >
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input name="name" placeholder="Full Name" onChange={(e)=> setName(e.target.value)} autoComplete="off" />
        </Form.Field>
        <Form.Field>
          <label>Registration Number</label>
          <input
            name="regNo"
            placeholder="Reg No"
            onChange={(e) => setReg(e.target.value)}
            autoComplete="off"
          />
        </Form.Field>
        

        <Button primary type="submit">Submit</Button>
        {error && <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>}
      </Form>

      <Divider horizontal style={{"color":"White"}}>Student Details</Divider>

      <Table celled>
        <Table.Header style={{"textAlign":"center"}}>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Number</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {students.map((row,index)=>(

          <Table.Row>
            <Table.Cell>{index+1}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.regNo}</Table.Cell>
            <Table.Cell>
            <Button onClick={()=>deleteHandler(row.regNo)} negative>Delete</Button>
            </Table.Cell>
          </Table.Row>

          ))}


        </Table.Body>
      </Table>
    </div>
    </div>
  );
};

export default Student;