import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import Contactoo from "../../components/sections/Contacto"

const Contacto = () =>{
    return (
        <Layout>
            <Navbar />
                <Contactoo />
            <Footer />
        </Layout>
    )
}

export default Contacto