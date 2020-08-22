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
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
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
      <Card className="signIn border-0 bg-background">
        <CardHeader align="center" className="bg-background mb-3">
          <h4>Sign Up to Dir Marketing</h4>
        </CardHeader>
        <Col align="center">
          <MdLockOpen size={40} />
        </Col>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <Input
              placeholder="Full Name ... "
              id="name"
              type="text"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Email ... "
              type="email"
              id="email"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Password"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Confirm Password ..."
              id="confirmpassword"
              type="password"
              onChange={this.handleChange}
            />
            <Col sm={12} md={12} xs={12} align="center" className="mt-3">
              <Button outline size="sm">
                Sign Up
              </Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default SignInPage;
