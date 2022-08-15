import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/aboutme.jpg";
import { SKILLS, TOOLS } from "../../Data";

function About() {
  return (
    <Container fluid className="about-section">
      <Container><hr/>
        
        <Row className="skill-tools-wrapper">          
          <Col className="skill-wrapper">
            <h3 className="project-heading">
              My <strong className="setpink">Skills</strong>
            </h3><hr></hr>
            {SKILLS.map((skill, index) => (
              <ul key={index} className="skill-name">
                <li>{skill}</li>
              </ul>
            ))}
          </Col>
          <Col className="skill-wrapper">
            <h3 className="project-heading">
              Most Used <strong className="setpink">Tools</strong>
            </h3><hr></hr>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
          </Col>
        </Row><hr/>
      </Container>
    </Container>
  );
}

export default About;
