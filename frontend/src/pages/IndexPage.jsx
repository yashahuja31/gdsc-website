import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Events from "../components/events/Events.jsx";
import FeedBack from "../components/feedback/FeedBack.jsx";

export default function IndexPage() {

    return (
        <>
            <Header />
            <Events />
            <FeedBack />
            <Footer />
        </>
    );
}