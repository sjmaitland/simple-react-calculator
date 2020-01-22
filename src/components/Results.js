import React, { Component } from 'react';

class Results extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="display__results">
        { result }
      </div>
    );
  }
}

export default Results;