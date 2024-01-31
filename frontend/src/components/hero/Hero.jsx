import "./Hero.css"

export default function Hero() {

    return (
        <div className={"heroBackground"}>
            <div className={"heroContainer"}>
                <div className={"heroProps1 heroProps"}>
                    <svg width="359" height="406" viewBox="0 0 359 406" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-92 -39.9425L-50.7352 322.214L-41.5652 402.693C-36.9956 404.521 -21.0172 397.534 6.33924 354.963C40.5348 301.75 -8.62444 157.387 170.551 117.849C313.892 86.2177 353.976 -34.5633 356.101 -91L-92 -39.9425Z"
                            stroke="#EA4235" stroke-width="5"/>
                    </svg>

                </div>

                <div className={"heroProps2 heroProps"}>
                    <svg width="324" height="438" viewBox="0 0 324 438" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M448.973 -16H84.4732H3.47323C1.13989 -11.6667 6.27323 5 45.4732 37C94.4732 77 243.473 44.5 262.473 227C277.673 373 393.14 426.5 448.973 435V-16Z"
                            stroke="#4286F5" stroke-width="5"/>
                    </svg>

                </div>

                <div className={"heroProps3 heroProps"}>
                    <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="41.6044" y="3.30587" width="39" height="42" transform="rotate(65.765 41.6044 3.30587)"
                              stroke="#B9B9B9" stroke-width="5"/>
                    </svg>

                </div>

                <div className={"heroProps4 heroProps"}>
                    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="34" cy="34" r="31.5" stroke="#B9B9B9" stroke-width="5"/>
                    </svg>
                </div>
                <span className={"heroProps heroProps5"}></span>
                <span className={"heroProps heroProps6"}></span>

                <div className={"heroTitleContainer"}>
                    <h1><span>G</span>oogle</h1>
                    <h1><span>D</span>eveloper</h1>
                    <h1><span>S</span>tudents</h1>
                    <h1><span>C</span>lub</h1>
                    <br/>
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