import Footer from "../../../components/navigation/Footer"
import Navbar from "../../../components/navigation/Navbar"
import Layout from "../../../hocs/layouts/Layout"
import TresD from "../../../components/spline/Spline3D"

const Portafolio = () =>{
    return (
        <Layout>
            <Navbar />
                <TresD />
            <Footer />
        </Layout>
    )
}

export default Portafolio   