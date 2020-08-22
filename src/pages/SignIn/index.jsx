import React, { Component } from "react";
import { MdLockOpen } from "react-icons/md";
import {
  Card,
  Col,
  Input,
  Button,
  CardHeader,
  CardBody,
  Form,
} from "reactstrap";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <Card className="signIn border-0">
        <CardHeader align="center" className="bg-background mb-3">
          <h4>Sign In to Dir Marketing</h4>
        </CardHeader>
        <Col align="center">
          <MdLockOpen size={40} />
        </Col>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <Input
              placeholder="Your Email"
              id="email"
              type="email"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Password"
              id="password"
              type="password"
              onChange={this.handleChange}
            />
            <Col align="center" className="mt-3">
              <Button size="sm" outline>
                Sign In
              </Button>{" "}
            </Col>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default SignInPage;
