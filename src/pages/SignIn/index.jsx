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
      <Card className="signIn border-0">
        <CardHeader align="center" className="bg-background mb-3">
          <h4>Sign In to Dir Marketing</h4>
        </CardHeader>
        <Col align="center">
          <MdLockOpen size={40} />
        </Col>
        <CardBody>
          <RenderInput placeholder="Your Email" type="email" />
          <RenderInput placeholder="Password" type="password" />
          <Col align="center" className="mt-3">
            <RenderButton title="Sign In" />
          </Col>
        </CardBody>
      </Card>
    );
  }
}

export default SignInPage;
