import React from "react";
import { Card, Col, CardImg, Row, CardHeader } from "reactstrap";
import {
  MerkatoOnline,
  Omritech,
  PoloTrip,
} from "../../../assets/DemoJobsImage";
const JobsList = [
  {
    title: "Merkato Online (መርካቶ ኦንላይን)",
    image: MerkatoOnline,
    paragraph:
      "Africa is a complex continent. Granted there are shared similarities amongst its citizens, each country has its own blend of cultural and lingual framework. On FashionGHANA, we have mainly looked into style from Ghana and Nigeria, and at times Ethiopia and South Africa, but don’t underestimate the trends and fashion being executed in other regions.",
  },
  {
    title: "Omritech Ethiopia (ኦምሪቴክ ኢትዮጵያ)",
    image: Omritech,
    paragraph:
      "Africa is a complex continent. Granted there are shared similarities amongst its citizens, each country has its own blend of cultural and lingual framework. On FashionGHANA, we have mainly looked into style from Ghana and Nigeria, and at times Ethiopia and South Africa, but don’t underestimate the trends and fashion being executed in other regions.",
  },
  {
    title: " Polo Trip (ፖሎ ትሪፕ)",
    image: PoloTrip,
    paragraph:
      "Africa is a complex continent. Granted there are shared similarities amongst its citizens, each country has its own blend of cultural and lingual framework. On FashionGHANA, we have mainly looked into style from Ghana and Nigeria, and at times Ethiopia and South Africa, but don’t underestimate the trends and fashion being executed in other regions.",
  },
  {
    title: "Omritech Ethiopia (ኦምሪቴክ ኢትዮጵያ)",
    image: Omritech,
    paragraph:
      "Africa is a complex continent. Granted there are shared similarities amongst its citizens, each country has its own blend of cultural and lingual framework. On FashionGHANA, we have mainly looked into style from Ghana and Nigeria, and at times Ethiopia and South Africa, but don’t underestimate the trends and fashion being executed in other regions.",
  },
  {
    title: "Merkato Online (መርካቶ ኦንላይን)",
    image: MerkatoOnline,
    paragraph:
      "Africa is a complex continent. Granted there are shared similarities amongst its citizens, each country has its own blend of cultural and lingual framework. On FashionGHANA, we have mainly looked into style from Ghana and Nigeria, and at times Ethiopia and South Africa, but don’t underestimate the trends and fashion being executed in other regions.",
  },
  {
    title: "Omritech Ethiopia (ኦምሪቴክ ኢትዮጵያ)",
    image: Omritech,
    paragraph:
      "Africa is a complex continent. Granted there are shared similarities amongst its citizens, each country has its own blend of cultural and lingual framework. On FashionGHANA, we have mainly looked into style from Ghana and Nigeria, and at times Ethiopia and South Africa, but don’t underestimate the trends and fashion being executed in other regions.",
  },
  {
    title: " Polo Trip (ፖሎ ትሪፕ)",
    image: PoloTrip,
    paragraph:
      "Africa is a complex continent. Granted there are shared similarities amongst its citizens, each country has its own blend of cultural and lingual framework. On FashionGHANA, we have mainly looked into style from Ghana and Nigeria, and at times Ethiopia and South Africa, but don’t underestimate the trends and fashion being executed in other regions.",
  },
  {
    title: "Omritech Ethiopia (ኦምሪቴክ ኢትዮጵያ)",
    image: Omritech,
    paragraph:
      "Africa is a complex continent. Granted there are shared similarities amongst its citizens, each country has its own blend of cultural and lingual framework. On FashionGHANA, we have mainly looked into style from Ghana and Nigeria, and at times Ethiopia and South Africa, but don’t underestimate the trends and fashion being executed in other regions.",
  },
  {
    title: "Merkato Online (መርካቶ ኦንላይን)",
    image: MerkatoOnline,
    paragraph:
      "Africa is a complex continent. Granted there are shared similarities amongst its citizens, each country has its own blend of cultural and lingual framework. On FashionGHANA, we have mainly looked into style from Ghana and Nigeria, and at times Ethiopia and South Africa, but don’t underestimate the trends and fashion being executed in other regions.",
  },
];

const Jobs = () => {
  return (
    <div className="jobsContainer">
      <Row>
        {JobsList.map((Jobss, index) => (
          <Col key={index} sm={12} xs={12} md={3} className="mb-5">
            <Card className="border-0 zoom">
              <CardImg src={Jobss.image} />
              <CardHeader>{Jobss.title}</CardHeader>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Jobs;
