import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import Contactoo from "../../components/sections/Contacto"

const Contacto = () =>{
    //Google Analytics
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-BP1WD095CY';
        script.async = true;
        document.head.appendChild(script);
    
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;
        window.gtag('js', new Date());
        window.gtag('config', 'G-BP1WD095CY');
    
        return () => {
          document.head.removeChild(script);
        };
      }, []);

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