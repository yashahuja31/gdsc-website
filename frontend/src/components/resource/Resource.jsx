import { useNavigate } from "react-router-dom";
import "./Resource.css";

const Resource = () => {
  const Navigate = useNavigate();

  const handleCardClick = (path) => {
    Navigate("/resources" + path);
  };

  return (
    <div className="resource-wpr" id="resources-section">
      <div className="resourcebody">
        <h1 className="resourceheading">Resource Sheet</h1>
        <div className="container">
          <div
            className="rcard"
            onClick={() => handleCardClick("/web-development")}
          >
            <div>
            <img src={"/resources/WebDevelopment.png"} alt="Card image cap" />
            </div>
            <div className="red">
              <h2>Web Development</h2>
            </div>
          </div>
          <div
            className="rcard"
            onClick={() => handleCardClick("/app-development")}
          >
            <div>
            <img src={"/resources/AppDevelopment.png"} alt="Card image cap" />
            </div>
            <div className="yellow">
              <h2>App Development</h2>
            </div>
          </div>
          <div
            className="rcard"
            onClick={() => handleCardClick("/data-structures")}
          >
            <div>

            <img src={"/resources/datastructures.png"} alt="Card image cap" />
            </div>
            <div className="blue">
              <h2>Data Structures and Algorthims</h2>
            </div>
          </div>
          <div
            className="rcard"
            onClick={() => handleCardClick("/machine-learning")}
          >
            <div>

            <img src={"/resources/machinelearning.png"} alt="Card image cap" />
            </div>
            <div className="red">
              <h2>Machine Learning</h2>
            </div>
          </div>
          <div
            className="rcard"
            onClick={() => handleCardClick("/cyber-security")}
          >
            <div>

            <img src={"/resources/cybersecurity.png"} alt="Card image cap" />
            </div>
            <div className="yellow">
              <h2>Cyber Security</h2>
            </div>
          </div>
          <div
            className="rcard"
            onClick={() => handleCardClick("/miscellaneous")}
          >
            <div>

            <img src={"/resources/miscellaneous.png"} alt="Card image cap" />
            </div>
            <div className="blue">
              <h2>Miscellaneous</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
