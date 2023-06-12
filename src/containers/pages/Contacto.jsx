import { Helmet } from 'react-helmet-async';

import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import Contactoo from "../../components/sections/Contacto"

const Contacto = () =>{
    return (
        <Layout>
            <Helmet>
                <title>Blocksidian | Contact</title>
                <meta name='description' content='Buy and sell tickets with solidity' />
                <meta name='keywords' content='blocksidian, blockchain' />
                <meta name='robots' content="all" />
                <meta name='author' content='Blocksidian' />
                <meta name='publisher' content='Blocksidian' />
            </Helmet>
            <Navbar />
                <Contactoo />
            <Footer />
        </Layout>
    )
}

export default Contacto