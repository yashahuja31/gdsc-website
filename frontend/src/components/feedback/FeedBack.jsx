import "./FeedBack.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";

export default function FeedBack() {
  const [isDropdownoneVisible, setIsDropdownoneVisible] = useState(false);
  const [isDropdowntwoVisible, setIsDropdowntwoVisible] = useState(false);
  const [isDropdownthreeVisible, setIsDropdownthreeVisible] = useState(false);
  const handleDropdownClick = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        setIsDropdownoneVisible(!isDropdownoneVisible);
        break;
      case 2:
        setIsDropdowntwoVisible(!isDropdowntwoVisible);
        break;
      case 3:
        setIsDropdownthreeVisible(!isDropdownthreeVisible);
        break;
      default:
        break;
    }
  };

  return (
    <div className="feedback-flex-container">
      <div className="feedbackcontainer">
        <p className="feedbackheading">
          Blast us with your feedback rockets - we'll make it rain improvements!
        </p>
        <p className="feedbacktext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
          urna condimentum, ultricies erat sit amet, venenatis est. Suspendisse
          porta facilisis tincidunt. Nam condimentum tincidunt nulla sed
          accumsan. Vestibulum sed diam eu turpis aliquam gravida elementum
          tempor arcu Nam sed.vensuf lorem ingdeg ipsum denvik.
        </p>
        <p className="feedbackinputline">Your feedback magic works here!</p>
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="write here .."
            className="feedbackform"
          />
        </InputGroup>
        <div className="faqcont">
          <img src={"/feedback/Rectangle623.png"} className="faqimg" />
          <p className="faq">FAQs</p>
        </div>
        <div className="dropdowncontainer">
          <div
            onClick={() => handleDropdownClick(1)}
            style={{
              cursor: "pointer",
              backgroundColor: isDropdownoneVisible ? "#c8c8c8" : "#e0e0e0",
            }}
            className="dropdown dropdown_one"
          >
            Q. What is GDSC?
            <div className="drp_icon">
              {isDropdownoneVisible ? (
                <FontAwesomeIcon className="ficon" icon={faCircleChevronDown} />
              ) : (
                <FontAwesomeIcon
                  className="ficon"
                  icon={faCircleChevronRight}
                />
              )}
            </div>
          </div>
          {isDropdownoneVisible && (
            <div className="drp_content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                a urna condimentum, ultricies erat sit amet, venenatis est.
                Suspendisse porta facilisis tincidunt. Nam condimentum tincidunt
                nulla sed accumsan.
              </p>
            </div>
          )}
          <div
            onClick={() => handleDropdownClick(2)}
            style={{
              cursor: "pointer",
              backgroundColor: isDropdowntwoVisible ? "#c8c8c8" : "#e0e0e0",
            }}
            className="dropdown dropdown_two"
          >
            Q. What is GDSC?
            <div className="drp_icon">
              {isDropdowntwoVisible ? (
                <FontAwesomeIcon className="ficon" icon={faCircleChevronDown} />
              ) : (
                <FontAwesomeIcon
                  className="ficon"
                  icon={faCircleChevronRight}
                />
              )}
            </div>
          </div>
          {isDropdowntwoVisible && (
            <div className="drp_content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                a urna condimentum, ultricies erat sit amet, venenatis est.
                Suspendisse porta facilisis tincidunt. Nam condimentum tincidunt
                nulla sed accumsan.
              </p>
            </div>
          )}
          <div
            onClick={() => handleDropdownClick(3)}
            style={{
              cursor: "pointer",
              backgroundColor: isDropdownthreeVisible ? "#c8c8c8" : "#e0e0e0",
            }}
            className="dropdown dropdown_three"
          >
            Q. What is GDSC?
            <div className="drp_icon">
              {isDropdownthreeVisible ? (
                <FontAwesomeIcon className="ficon" icon={faCircleChevronDown} />
              ) : (
                <FontAwesomeIcon
                  className="ficon"
                  icon={faCircleChevronRight}
                />
              )}
            </div>
          </div>
          {isDropdownthreeVisible && (
            <div className="drp_content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                a urna condimentum, ultricies erat sit amet, venenatis est.
                Suspendisse porta facilisis tincidunt. Nam condimentum tincidunt
                nulla sed accumsan.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="feedbackcardcontainer">
        <Card className="card-one feedback-card">
          <Card.Body>
            <Card.Title>Testimonial</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Nandini Aggarwal
            </Card.Subtitle>
            <Card.Text className="feedback-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              urna condimentum, ultricies erat sit amet, venenatis est.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-two feedback-card">
          <Card.Body>
            <Card.Title>Testimonial</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Nandini Aggarwal
            </Card.Subtitle>
            <Card.Text className="feedback-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              urna condimentum, ultricies erat sit amet, venenatis est.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-three feedback-card">
          <Card.Body>
            <Card.Title>Testimonial</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Nandini Aggarwal
            </Card.Subtitle>
            <Card.Text className="feedback-card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              urna condimentum, ultricies erat sit amet, venenatis est.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
