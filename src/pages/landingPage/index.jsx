import React, { Component } from "react";
import { Jobs, DirLanding } from "./components";
import Divider from "../../components/Divider";
import { connect } from "react-redux";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { jobs } = this.props;
    return (
      <div>
        <DirLanding />
        <Divider title="Job Offerings (የስራ እድሎች)" />
        <Jobs jobs={jobs} />
        <Divider title="ሶመትሂንግ (የስራ እድሎች)" />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    jobs: state.job.jobs,
  };
};

export default connect(mapStateToProps)(LandingPage);
