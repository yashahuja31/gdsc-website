import "./Domains.css";

export default function Domains() {
    return (
        <div className="domainbody">
            <h1 className="domainheading"> Domains </h1>
            <div className="container">
                <div className="card">
                    <img
                        className="card-img-top"
                        src={"/domains/GraphicsandVE.png"}
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
                        src={"/domains/TechContent.png"}
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
                        src={"/domains/Marketing.png"}
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
                    <img className="card-img-top" src={"/domains/TechDev.png"} alt="Card image cap" />
                    <div className="card-body">
                        <h2 className="card-heading">Tech Dev</h2>
                        <p className="card-text">
                            The tech department crafts digital solutions and navigates the
                            dynamic intersection of technology and human progress.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={"/domains/AIML.png"} alt="Card image cap" />
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
                        src={"/domains/CyberSecurity.png"}
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
