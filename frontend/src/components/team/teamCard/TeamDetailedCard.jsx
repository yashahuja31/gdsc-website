import "./TeamDetailedCard.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faMedium, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useEffect, useState} from "react";
import {Dialog} from "@mui/material";
import axios from "axios";

const mapping = {
    Instagram: faInstagram,
    Twitter: faTwitter,
    Medium: faMedium,
    Linkedin: faLinkedin,
    Github: faGithub,
}

export default function TeamDetailedCard({profileId}) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        id: "",
        profiles: [],
        name: "",
        about: "",
        position: "",
        memberType: "",
        imageUrl: "",
        branch: ""
    });

    useEffect(() => {
        if (profileId !== "") setOpen(true)
    }, [data]);

    useEffect(() => {
        if (profileId === "") return;
        axios.get("/members/" + profileId)
            .then(res => res.data)
            .then(data => setData(data))
    }, [profileId]);

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
        >
            <div className={"profile"}>
                <div className={"profileImagesContainer"}>
                    <img src={"/team/teamBanner.png"} alt={"profile banner"}/>
                    <div className={"mainProfileImageContainer"}>
                        <img src={data.imageUrl} alt={"profile image"} width={90} height={90}/>
                    </div>

                </div>
                <div className={"profileContentContainer"}>
                    <h2><b>{data.name}</b></h2>
                    <p>{data.position}</p>
                    <br/>
                    <br/>
                    <p>{data.about}</p>
                    <br/>
                    <a href={data.profiles.find(i => i.profileType === "Portfolio")?.profileUrl}>portfolio</a>
                </div>
                <div className={"profileLinksContainer"}>
                    {data.profiles.map((i, idx) =>
                        <a key={idx+1} href={i.profileUrl}>
                            <FontAwesomeIcon size="xl" icon={mapping[i.profileType]}/>
                        </a>
                    )}
                </div>
            </div>
        </Dialog>
    );
}