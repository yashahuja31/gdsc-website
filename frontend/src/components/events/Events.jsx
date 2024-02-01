import "./Events.css"

export default function Events() {

    return (
        <div className="eventSection">
            <h1>Events</h1>
            <div className="eventInfo" >
                <div className="eventLogo" >
                    <img src="/events/event1Logo.png" alt=""></img>
                </div>
                <div className="eventName">
                    <img src="/events/event1Name.png" alt=""></img>

                </div>
                <div className="eventImage">
                    <img src="/events/event1Image.png" alt=""></img>
                </div>
            </div>
            <div className="eventsTimeline" >
                <div className="timelineInputs active"></div>
                <div className="timelineInputs active"></div>
                <div className="timelineInputs"></div>
                <div className="timelineInputs"></div>
                <div className="timelineInputs"></div>
            </div>
        </div>
    );
}