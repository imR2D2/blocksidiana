import Footer from "../../../components/navigation/Footer"
import Navbar from "../../../components/navigation/Navbar"
import Layout from "../../../hocs/layouts/Layout"
import JavaGimnasia from "../../../components/sections/portafolio/screens/JavaGimnasia"

const Portafolio = () =>{
    return (
        <Layout>
            <Navbar />
                <JavaGimnasia />
            <Footer />
        </Layout>
    )
}

export default Portafolio