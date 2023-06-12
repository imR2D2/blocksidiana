import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>Blocksidian | Home</title>
                <meta name='description' content='Buy and sell tickets with solidity' />
                <meta name='keywords' content='blocksidian, blockchain' />
                <meta name='robots' content="all" />
                <meta name='author' content='Blocksidian' />
                <meta name='publisher' content='Blocksidian' />
            </Helmet>

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