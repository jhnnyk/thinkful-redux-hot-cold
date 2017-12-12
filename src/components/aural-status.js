import React from "react";
import { connect } from "react-redux";

export class AuralStatus extends React.Component {
  render() {
    return (
      <p
        id="status-readout"
        className="visuallyhidden"
        aria-live="assertive"
        aria-atomic="true"
      >
        {this.props.auralStatus}
      </p>
    );
  }
}

const mapStateToProps = state => ({ auralStatus: state.auralStatus });

export default connect(mapStateToProps)(AuralStatus);
