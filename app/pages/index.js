import React, { Component } from "react";
import Router from "next/router";

export default class Index extends Component {
  componentDidMount = () => {

    let comment = document.createComment(
     
      `*** Pages/index.js testing to see what this renders, it only has a div:
  
    `);
    document.insertBefore(comment, document.documentElement);

    Router.push("/components");
  };

  render() {
    return <div />;
  }
}
