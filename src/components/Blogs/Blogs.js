import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import finance from "../../Assets/Projects/finance.jpeg";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={finance}
              link="http://financefornewbies2015.blogspot.com/"
              title="Finance for Newbies"
              site="blogspot.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
