import "./Domains.css";
import AIMLimg from "../../assets/Domainimages/AIML.png";
import CyberSecurityimg from "../../assets/Domainimages/CyberSecurity.png";
import GraphicsandVEimg from "../../assets/Domainimages/GraphicsandVE.png";
import Marketingimg from "../../assets/Domainimages/Marketing.png";
import TechContentimg from "../../assets/Domainimages/TechContent.png";
import TechDevimg from "../../assets/Domainimages/TechDev.png";

export default function Domains() {
    return (
        <div className="domainbody">
            <h1 className="domainheading"> Domains </h1>
            <div className="container">
                <div className="card">
                    <img
                        className="card-img-top"
                        src={GraphicsandVEimg}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h2 className="card-heading">Graphics and VE</h2>
                        <p className="card-text">
                            Masters of Graphics and Video Editing, crafting creativity, and
                            bringing visions to life in our society.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src={TechContentimg}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h2 className="card-heading">Tech Content</h2>
                        <p className="card-text">
                            Tech Content: Conveying innovation, knowledge, and trends for
                            society's advancement.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src={Marketingimg}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h2 className="card-heading">Marketing</h2>
                        <p className="card-text">
                            College Tech Society's Marketing Wizards: Crafting narratives,
                            sparking curiosity, and igniting passion for innovation.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={TechDevimg} alt="Card image cap" />
                    <div className="card-body">
                        <h2 className="card-heading">Tech Dev</h2>
                        <p className="card-text">
                            The tech department crafts digital solutions and navigates the
                            dynamic intersection of technology and human progress.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={AIMLimg} alt="Card image cap" />
                    <div className="card-body">
                        <h2 className="card-heading">AI & ML</h2>
                        <p className="card-text">
                            College AI & ML Pioneers: Unleashing intelligent algorithms,
                            inspiring innovation, and reshaping the future of technology.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src={CyberSecurityimg}
                        alt="Card image cap"
                    />
                    <div className="card-body">
                        <h2 className="card-heading">Cyber Security</h2>
                        <p className="card-text">
                            Cybersecurity Guardians: Shielding our tech society, fortifying
                            defenses, securing data, and ensuring digital resilience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
