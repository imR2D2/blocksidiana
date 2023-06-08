import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import Acercaa from "../../components/sections/Acerca"

const About = () =>{
    return (
        <Layout>
            <Navbar />
                <Acercaa />
            <Footer />
        </Layout>
    )
}

export default About