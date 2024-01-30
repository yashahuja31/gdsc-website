import "./Hero.css"

export default function Hero() {

    return (
        <div className={"heroBackground"}>
            <div className={"heroContainer"}>
                <div className={"heroTitleContainer"}>
                    <h1><span>G</span>oogle</h1>
                    <h1><span>D</span>eveloper</h1>
                    <h1><span>S</span>tudents</h1>
                    <h1><span>C</span>lub</h1>
                    <br />
                    <h1>ADGIPS</h1>
                </div>

                <div className={"heroImageContainer"}>
                    <img src={"/hero/sideImg.png"} alt={"image"}/>
                </div>

            </div>
            <p>Through GSDC-ADGITM we, Developers and Designers want
                to foster a healthy development culture. Developer Student
                Clubs is a program that will help students to learn mobile and
                web development, design thinking and leadership skills.
            </p>
        </div>

    );
}