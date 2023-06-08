import Footer from "../../../components/navigation/Footer"
import Navbar from "../../../components/navigation/Navbar"
import Layout from "../../../hocs/layouts/Layout"
import DosD from "../../../components/spline/Spline2D"

const Portafolio = () =>{
    return (
        <Layout>
            <Navbar />
                <DosD />
            <Footer />
        </Layout>
    )
}

export default Portafolio