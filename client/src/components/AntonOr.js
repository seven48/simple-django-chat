import React, { Component } from "react";

class AntonOr extends Component {
  render() {
    return(
      <div className = 'anton-or'>
        <div className = 'anton'></div>
        <div className = 'or'>{this.props.orMessage}</div>
      </div>
    )
  }
}

export default AntonOr
