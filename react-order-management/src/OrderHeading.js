import React from "react";

export default class OrderHeading extends React.Component {
  render() {
    return (
      <header>
        <div className="orderHeader">
          <div className="gradientLayer">
            <h1>Thank you for&nbsp;using&nbsp;Spigot&nbsp;Inc.</h1>
            <p>
              Please use the tools below to track your package and see who is
              delivering it.
            </p>
          </div>
        </div>
      </header>
    );
  }
}
