import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crawler from "../../Assets/Projects/crawler.jpeg";
import scene_text_detection from "../../Assets/Projects/scene_text_detection.png";
import pommerman from "../../Assets/Projects/pommerman.png";
import yelp from "../../Assets/Projects/yelp.jpeg";
import ml_hackathon from "../../Assets/Projects/ml_hackathon.jpeg";
import object_detection from "../../Assets/Projects/object_detection.jpg";
import social_networking_website from "../../Assets/Projects/social_networking_website.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yelp}
              isBlog={false}
              title="Yelp Recommender System"
              description="Single handedly helped in securing a prospective food delivery client by making a sample recommender system using ALS algorithm in pyspark and used ﬂask library for backend and frontend development."
              ghLink="https://github.com/anoopkarnik/YelpRecommenderSystem"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crawler}
              isBlog={false}
              title="Play Store Web Crawler"
              description="Created a web crawler to fetch all of google play data for organizing a competition for a well-recognized analytics competition using scrapy framework in python."
              link="https://github.com/anoopkarnik/webcrawlers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pommerman}
              isBlog={false}
              title="Multi Agent Reinforcement Learning in Pommerman"
              description="Pommerman is a multiagent game where you use 2 cooperating agents to play against 2 competing agents having partial observations of the environment and communication between cooperating agents."
              link="https://github.com/anoopkarnik/pommerman_radio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={object_detection}
              isBlog={false}
              title="Object Detection without Deep Learning"
              description="We use a combination of 4 cues - edge density, multi scale saliency, superpixel
              and color contrast to ﬁnd the windows containing objects and then use non max
              suppression sampling to ﬁnd the optimal windows and train a naive bayes model
              with a training set of images."
              link="https://github.com/Prathyusha-Akundi/Measuring_Objectness"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scene_text_detection}
              isBlog={false}
              title="Scene Text Detection"
              description="We use stroke width transform in an edge map and use connected components to
              detect text in natural images like sign boards on roads. We then identify the
              characters using spacing and recognize words in the text using Resnet neural
              network architecture."
              link="https://github.com/anoopkarnik/SceneTextDetection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social_networking_website}
              isBlog={false}
              title="INDULGE - Social Networking Site For Elderly"
              description="Created a Social Networking Site for Elderly using python ﬂask, javascript, html,
              css, sockets with a teammate with chatrooms, friends, likes, comments, games,
              etc features as per elderly design and usage requirements."
              link="https://github.com/anoopkarnik/SNFE.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ml_hackathon}
              isBlog={false}
              title="ML Hackathons in Analytics Vidhya & AICrowd"
              description="Participated in many hackathons containing classiﬁcation, regression, NLP and
              computer vision task and secured top 10 ranks in few competitions."
              link="https://github.com/anoopkarnik/AnalyticsVidhyaLinux"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
