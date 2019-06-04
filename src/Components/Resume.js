import React, { Component } from 'react';

class Resume extends Component {

  render() {
    return (
      <div style={{margin: "auto", justifyContent: "center", width: "100%", height: "100%" }}>
      <embed src="resume.pdf" width={"100%"} height={"100%"}/>
      </div>
    );
  }
}

export default Resume;