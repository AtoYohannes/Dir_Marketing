import React from "react";
import { Card, Col, CardImg, Row, CardHeader } from "reactstrap";



const Jobs = ({ jobs }) => {
  return (
    <div className="jobsContainer">
      <Row>
        {jobs &&
          jobs.map((Jobs, index) => (
            <Col key={index} sm={12} xs={12} md={3} className="mb-5">
              <Card className="border-0 zoom">
                <CardImg src={Jobs.image} />
                <CardHeader>{Jobs.title}</CardHeader>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};
export default Jobs;
