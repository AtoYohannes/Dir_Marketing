import React from "react";
import Divider1 from "../assets/Divider.png";
import { Row, Col } from "reactstrap";

const Divider = ({ title }) => {
  return (
    <div className="divider bg-background mb-5">
      <Row>
        <Col>
          <img src={Divider1} alt="" />
        </Col>
        <Col md={12}>
          <div>
            <h3>
              <b>{title}</b>
            </h3>
          </div>
        </Col>
        <Col>
          <img src={Divider1} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default Divider;
