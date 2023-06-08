import Footer from "../../../components/navigation/Footer"
import Navbar from "../../../components/navigation/Navbar"
import Layout from "../../../hocs/layouts/Layout"
import Portafolioo from "../../../components/sections/portafolio/Portafolio"

const Portafolio = () =>{
    return (
        <Layout>
            <Navbar />
                <Portafolioo />
            <Footer />
        </Layout>
    )
}

export default Portafolio