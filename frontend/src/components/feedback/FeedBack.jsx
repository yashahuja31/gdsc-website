import "./FeedBack.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronDown, faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import emailjs from '@emailjs/browser';

const SendImg = ({onClick}) => (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="#000000" width={32}  viewBox="0 0 512 512">

      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

      <g id="SVGRepo_iconCarrier">

        <title>ionicons-v5-q</title>

        <path
            d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z"/>

      </g>

    </svg>
)

export default function FeedBack() {
  const [isDropdownoneVisible, setIsDropdownoneVisible] = useState(false);
  const [isDropdowntwoVisible, setIsDropdowntwoVisible] = useState(false);
  const [isDropdownthreeVisible, setIsDropdownthreeVisible] = useState(false);
  const [feedback, setFeedback] = useState("");

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

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form Data:", feedback);
    emailjs.send('service_cfqbgtu', 'template_uvi4g37', {feedback}, '49d2lQplNu6mw181N')
        .then((result) => {
          console.log(result.text);
          console.log("message sent!!");
        }, (error) => {
          console.log(error.text);
        });
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
        <div style={{display: "flex", flexDirection: 'column'}}>
          <input
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="write here .."
              className="feedbackform mb-3"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
          />
          <SendImg onClick={sendEmail}/>
        </div>


        <div className="faqcont">
          <img src={"/feedback/Rectangle623.png"} className="faqimg"/>
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


