import {useNavigate} from "react-router-dom";
import "./Resource.css";
import resourcesList from "../../data/resourcesList.js";

const Resource = () => {
    const Navigate = useNavigate();

    const handleCardClick = (path) => {
        Navigate("/resources/" + path);
    };

    return (
        <div className="resource-wpr" id="resources-section">
            <div className="resourcebody">
                <h1 className="resourceheading">Resource Sheet</h1>
                <div className="container">
                    {
                        resourcesList.map((resource, idx) => <div
                            key={idx + 1}
                            className="rcard"
                            onClick={() => handleCardClick(resource.resourceId)}
                        >
                            <div>
                                <img src={`/resources/${resource.resourceId}.png`} alt="Card image cap"/>
                            </div>
                            <div className={["red", "yellow", "blue"][Math.floor(Math.random() * 3)]}>
                                <h2>{resource.name}</h2>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Resource;
