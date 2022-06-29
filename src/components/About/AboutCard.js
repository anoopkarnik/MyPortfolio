import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anoop Karnik Dasika </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />I am a senior software engineer in Mpowered Health. 
            I did my masters (MS research in Computer Science) in machine learning 
            lab of IIIT Hyderabad. I did my Btech Hons (Mechanical) in Bits Pilani.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing and Guitar Jamming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Self-help Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tv Shows and Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anoop</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
