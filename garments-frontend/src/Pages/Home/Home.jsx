import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import GetStarted from "./GetStarted";
import HowItWorks from "./HowItWorks";
import Stats from "./Stats";
import WhyThreadTrack from "./WhyThreadTrack";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Stats></Stats>
            <FeaturedProducts></FeaturedProducts>
            <HowItWorks></HowItWorks>
            <WhyThreadTrack></WhyThreadTrack>
            <GetStarted></GetStarted>
        </>
    );
};

export default Home;