import "./Team.css";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {useEffect, useState} from "react";
import axios from "axios";
import TeamDetailedCard from "./teamCard/TeamDetailedCard.jsx";

const TeamCard = ({data, setCurrentProfile}) => (
    <div className="team-card" onClick={()=>setCurrentProfile(data.id)}>
        <div className={`team-card-img team-card-img-${Math.floor(Math.random() * 4) + 1}`}>
            <img
                className="team-card-img-top"
                src={data.imageUrl}
                alt="team image"
            />
        </div>
        <div className="card-body">
            <h3>{data.name}</h3>
            <p>{data.position}</p>
            <a className="icons" href={data.profiles.find(i => i.profileType === "Github")?.profileUrl}>
                <FaGithub/>
            </a>
            <a className="icons" href={data.profiles.find(i => i.profileType === "Linkedin")?.profileUrl}>
                <FaLinkedin/>
            </a>
        </div>
    </div>
)

export default function Team() {
    const [members, setMembers] = useState([])
    const [currentProfile, setCurrentProfile] = useState("");

    useEffect(() => {
        axios.get("/members")
            .then(res => res.data)
            .then(data => setMembers(data));
    }, []);


    return (
        <>
            <div className="team-body">
                <div>
                    <h1 className="team-heading">Meet The Team</h1>
                    <div className="team-container">
                        {
                            members.map((i, idx) => i.memberType === "Team" ?
                                <TeamCard key={idx + 1} data={i} setCurrentProfile={setCurrentProfile} /> : <></>)
                        }
                    </div>

                    <h1 className="team-heading">Contributors</h1>
                    <div className="team-container">
                        {
                            members.map((i, idx) => i.memberType === "Contributor" ?
                                <TeamCard key={idx + 1} data={i} setCurrentProfile={setCurrentProfile} /> : <></>)
                        }
                    </div>
                </div>
            </div>
            <TeamDetailedCard profileId={currentProfile}/>
        </>

    );
}
