import "./Team.css"
import { FaItalic, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Team() {

    return (
        <div className="team-body">
            <h1 className="team-heading">Meet The Team</h1>
            <div className="team-container">
                <div className="team-card">
                    <div className="team-card-img-1">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Anish Hazra</h3>
                        <p>President</p>
                        <a className='icons' href="/"><FaGithub/></a>
                        <a className='icons' href="/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-card-img-2">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Veer Yadav</h3>
                        <p>Vice President</p>
                        <a className='icons' href="https://github.com/AnishHazra"><FaGithub/></a>
                        <a className='icons' href="https://www.linkedin.com/in/anish-hazra/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-card-img-3">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Agrima</h3>
                        <p>Graphics Lead</p>
                        <a className='icons' href="https://github.com/AnishHazra"><FaGithub/></a>
                        <a className='icons' href="https://www.linkedin.com/in/anish-hazra/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-card-img-4">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Nandini Singh</h3>
                        <p>AI&ML Lead</p>
                        <a className='icons' href="https://github.com/AnishHazra"><FaGithub/></a>
                        <a className='icons' href="https://www.linkedin.com/in/anish-hazra/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-card-img-2">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Shashank</h3>
                        <p>Teach Lead</p>
                        <a className='icons' href="https://github.com/AnishHazra"><FaGithub/></a>
                        <a className='icons' href="https://www.linkedin.com/in/anish-hazra/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-card-img-4">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Aditya Mishra</h3>
                        <p>Management Lead</p>
                        <a className='icons' href="https://github.com/AnishHazra"><FaGithub/></a>
                        <a className='icons' href="https://www.linkedin.com/in/anish-hazra/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-card-img-3">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Md Mobin</h3>
                        <p>Android Lead</p>
                        <a className='icons' href="https://github.com/AnishHazra"><FaGithub/></a>
                        <a className='icons' href="https://www.linkedin.com/in/anish-hazra/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-card-img-1">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Devaj Banyal</h3>
                        <p>Cyber Security Lead</p>
                        <a className='icons' href="https://github.com/AnishHazra"><FaGithub/></a>
                        <a className='icons' href="https://www.linkedin.com/in/anish-hazra/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-card-img-3">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Lakshay Gulati</h3>
                        <p>xyz</p>
                        <a className='icons' href="https://github.com/AnishHazra"><FaGithub/></a>
                        <a className='icons' href="https://www.linkedin.com/in/anish-hazra/"><FaLinkedin/></a>
                    </div>
                </div>
                <div className="team-card">
                    <div className="team-card-img-1">
                    <img
                        className="team-card-img-top"
                        src={"/team/img1.png"}
                        alt="team image"
                    />
                    </div>
                    <div className="card-body">
                        <h3>Anish Hazra</h3>
                        <p>xyz</p>
                        <a className='icons' href="https://github.com/AnishHazra"><FaGithub/></a>
                        <a className='icons' href="https://www.linkedin.com/in/anish-hazra/"><FaLinkedin/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}