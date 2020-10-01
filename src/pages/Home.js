import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import About from '../components/About'

export default function Home() {
    return (
        <>
            <Hero >
                <Banner title="BUSINESS SOLUTIONS" subtitle="FOCUSED ON QUALITY APPLICATION DELIVERY">
                    <Link to="/services" className="btn-primary">
                        our services
                    </Link>
                </Banner>
            </Hero>
            <About />
        </>
    )
}
