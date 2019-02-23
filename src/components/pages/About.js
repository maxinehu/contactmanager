import React from "react";

const About = props => {
  return (
    <div>
      <h1 className="display-4">About {props.match.params.id} </h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 0.0.1</p>
    </div>
  );
};

export default About;
