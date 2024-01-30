import React, { Component } from "react";
import Router from "next/router";

//create  _error as a component
export default class _error extends Component {

  //as soon as the component is loadedin...
  componentDidMount = () => {

    
    let comment = document.createComment(`*** Error 404 The page was not found ***`);
    document.insertBefore(comment, document.documentElement);

    Router.push("/components");
  };

  render() {
    return <div />;
  }
}
