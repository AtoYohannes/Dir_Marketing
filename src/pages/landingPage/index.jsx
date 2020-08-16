import React, { Component } from "react";
import { Jobs } from "./components";
import Divider from "../../components/Divider";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Divider title="Job Offerings (የስራ እድሎች)" />
        <Jobs />
        <Divider title="ሶመትሂንግ (የስራ እድሎች)" />

      </div>
    );
  }
}

export default LandingPage;
