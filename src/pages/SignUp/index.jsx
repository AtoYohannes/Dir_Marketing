import React, { Component } from "react";
import { MdLockOpen } from "react-icons/md";
import { RenderInput, RenderButton } from "../../components/MainRender";
import { Card, Col, CardHeader, CardBody } from "reactstrap";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
          <RenderInput placeholder="Full Name ... " type="text" />
          <RenderInput placeholder="Email ... " type="email" />
          <RenderInput placeholder="Password" type="password" />
          <RenderInput placeholder="Confirm Password ..." type="password" />
          <Col sm={12} md={12} xs={12} align="center" className="mt-3">
            <RenderButton title="Sign Up" />
          </Col>
        </CardBody>
      </Card>
    );
  }
}

export default SignInPage;
