import React from "react";

export default class PackageFilter extends React.Component {
  render() {
    return (
      <section className="filterBar">
        <h2>Track your Package here</h2>
        <input
          type="text"
          placeholder="Filter by order number..."
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </section>
    );
  }
}
