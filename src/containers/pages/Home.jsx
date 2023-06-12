import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import HeroSection from "../../components/navigation/HeroSection"
import PartnerSection from "../../components/navigation/PartnerSection"
import About from "../../components/navigation/About"
import Steps from "../../components/navigation/Steps"
import Video from "../../components/navigation/videoPresentation"


const Home = () =>{
    return (
        <Layout>
            <div>
                <Navbar />
                <HeroSection />
                <PartnerSection />
                <About />
                <Video />
                <Steps />
            </div>
            <Footer />
        </Layout>
    )
}

export default Home