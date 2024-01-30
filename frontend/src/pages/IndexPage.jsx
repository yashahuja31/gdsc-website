import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Events from "../components/events/Events.jsx";
import FeedBack from "../components/feedback/FeedBack.jsx";
import Domains from "../components/domains/Domains.jsx";

export default function IndexPage() {

    return (
        <>
            <Header />
            <Domains />
            <FeedBack />
            <Footer />
        </>
    );
}