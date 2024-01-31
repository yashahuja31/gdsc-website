import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {

    return (
        <footer>
            <div className="footerPart1">
                <img src="/footer/gdsc.png" alt="GDSC Logo" height={40}/>
                <br/>
                <p>
                    GOOGLE DEVELOPER<br/>STUDENTS CLUB ADGIPS
                </p>
            </div>
            <div className="footerPart2">
                <a href={"/"}><FontAwesomeIcon icon={faInstagram}/></a>
                <a href={"/"}><FontAwesomeIcon icon={faGithub}/></a>
                <a href={"/"}><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href={"/"}><FontAwesomeIcon icon={faTwitter}/></a>
                <a href={"/"}><FontAwesomeIcon icon={faFacebook}/></a>
                <a href={"/"}><FontAwesomeIcon icon={faEnvelope}/></a>
                <a href={"/"}><FontAwesomeIcon icon={faMedium}/></a>

                <p>
                    Made with&nbsp;
                    <span style={{color: "#5697C1"}}>&hearts;</span>
                    &nbsp;by&nbsp;
                    <span>G</span>
                    <span>D</span>
                    <span>S</span>
                    <span>C</span>
                     &nbsp;| ADGIPS
                </p>
                <span className={"FooterCopyright"}>Copyright © 2024 gdscadgips.in</span>
            </div>

            <div className="footerPart3">
                <a href="" className="tags">DEPARTMENTS</a>
                <a href="" className="tags">NEWSLETTERS</a>
                <a href="" className="tags">EVENTS</a>
                <a href="" className="tags">JOINCLUB</a>
                <a href="" className="tags">GALLERY</a>
                <a href="" className="tags">CONTRIBUTORS</a>
            </div>
        </footer>
    );
}