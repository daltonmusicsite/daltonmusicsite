import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ReactPlayer from "react-player";


const Project = ({ heading, username, length, specfic }) => {

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          <div class="col"><ReactPlayer height="200px" width="400px" url="https://soundcloud.com/dalton-smith-757205806/pipes-and-spikes-1" /></div>
          <div class="col"><ReactPlayer height="200px" width="400px"  url="https://soundcloud.com/dalton-smith-757205806/hallowed-halls" /></div>
          <div class="col"><ReactPlayer height="200px" width="400px" url="https://soundcloud.com/dalton-smith-757205806/little-city-1" /></div>
          <div class="col"><ReactPlayer height="200px" width="400px"  url="https://soundcloud.com/dalton-smith-757205806/for-ivan" /></div>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
