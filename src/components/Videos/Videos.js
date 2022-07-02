import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideosIframes from "./VideosIframes";
import Particle from "../Particle";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <VideosIframes
              link="https://www.youtube.com/watch?v=0WW7wInugt0"
              title="Shaam Bhi Koyi Guitar Cover"
              imgPath="https://img.youtube.com/vi/0WW7wInugt0/hq1.jpg"
            />
          </Col>
          <Col md={4} className="blog-card">
            <VideosIframes
              link="https://www.youtube.com/watch?v=5eQD3xfV1hE"
              title="Mad World Guitar Cover"
              imgPath="https://img.youtube.com/vi/5eQD3xfV1hE/hq1.jpg"
            />
          </Col>
          <Col md={4} className="blog-card">
            <VideosIframes
              link="https://www.youtube.com/watch?v=MyHFstjQbwA"
              title="Agar Tum Saath Ho Guitar Cover"
              imgPath="https://img.youtube.com/vi/MyHFstjQbwA/hq1.jpg"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <VideosIframes
              link="https://www.youtube.com/watch?v=1YYMGwhGwOE"
              title="Kuch Kam Roshan Hain Zindagi Guitar Cover"
              imgPath="https://img.youtube.com/vi/1YYMGwhGwOE/hq1.jpg"
            />
          </Col>
          <Col md={4} className="blog-card">
            <VideosIframes
              link="https://www.youtube.com/watch?v=StTwCqEetC0"
              title="Tum ho Toh Guitar Cover"
              imgPath="https://img.youtube.com/vi/StTwCqEetC0/hq1.jpg"
            />
          </Col>
          <Col md={4} className="blog-card">
            <VideosIframes
              link="https://www.youtube.com/watch?v=CI_8OOfsM50"
              title="Kammani ee Prema lekha Guitar Cover"
              imgPath="https://img.youtube.com/vi/CI_8OOfsM50/hq1.jpg"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <VideosIframes
              link="https://www.youtube.com/watch?v=lBC-UEM_3Xk"
              title="Alvida Alvida Guitar Cover"
              imgPath="https://img.youtube.com/vi/lBC-UEM_3Xk/hq1.jpg"
            />
          </Col>
          <Col md={4} className="blog-card">
            <VideosIframes
              link="https://www.youtube.com/watch?v=V8bZcdH95X4"
              title="Tera Yaar Hoon Main Guitar Cover"
              imgPath="https://img.youtube.com/vi/V8bZcdH95X4/hq1.jpg"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
