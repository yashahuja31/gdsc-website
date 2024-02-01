import Header from "../components/header/Header.jsx";
import Events from "../components/events/Events.jsx";
import CloudComponent from "../components/cloudComponent/CloudComponent.jsx";
import Footer from "../components/footer/Footer.jsx";

export default function EventsPage() {

    return (
        <>
            <Header />
            <Events/>
            <CloudComponent />
            <Footer />
        </>
    );
}