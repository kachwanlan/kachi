import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ekene.jpg";

function Home() {
  return (
    <section className="home_bg">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>

            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Onyekachi</strong>
              </h1>
              <p className="heading-description blockquote">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.<hr/>   
              </p>  
              <p className="heading-description blockquote">
                I love solving complex problem.                
              </p>            
            </Col>
          </Row>
        </Container>
      </Container>      
    </section>
  );
}

export default Home;
