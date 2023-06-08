import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import HeroSection from "../../components/navigation/HeroSection"
import PartnerSection from "../../components/navigation/PartnerSection"
import Prueba from "../../components/navigation/Jija.js"
import Steps from "../../components/navigation/Steps"


const Home = () =>{
    return (
        <Layout>
            <div>
                <Navbar />
                <HeroSection />
                <Prueba />
                <PartnerSection />
                <Steps />
            </div>
            <Footer />
        </Layout>
    )
}

export default Home