import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Events from "../components/events/Events.jsx";
import FeedBack from "../components/feedback/FeedBack.jsx";
import Domains from "../components/domains/Domains.jsx";
import Hero from "../components/hero/Hero.jsx";
import CloudComponent from "../components/cloudComponent/CloudComponent.jsx";

export default function IndexPage() {

    return (
        <>
            <Header />
            <Hero />
            <Domains />
            <FeedBack />
            <CloudComponent />
            <Footer />
        </>
    );
}