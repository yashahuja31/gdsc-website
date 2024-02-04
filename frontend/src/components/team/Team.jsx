import "./Team.css";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {useEffect, useState} from "react";
import axios from "axios";

const TeamCard = ({data}) => (
    <div className="team-card">
        <div className="team-card-img-1">
            <img
                className="team-card-img-top"
                src={"/team/img1.png"}
                alt="team image"
            />
        </div>
        <div className="card-body">
            <h3>{data.name}</h3>
            <p>{data.position}</p>
            <a className="icons" href="/">
                <FaGithub/>
            </a>
            <a className="icons" href="/">
                <FaLinkedin/>
            </a>
        </div>
    </div>
)

export default function Team() {
    const [members, setMembers] = useState([])

    useEffect(() => {
        axios.get("/members")
            .then(res => res.data)
            .then(data => setMembers(data));
    }, []);

    return (
        <div className="team-body">
            <div>
                <h1 className="team-heading">Meet The Team</h1>
                <div className="team-container">
                    {
                        members.map((i, idx) => <TeamCard key={idx+1} data={i} />)

                    }
                </div>
            </div>
        </div>
    );
}
