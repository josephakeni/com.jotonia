import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import About from '../components/About'
import FeaturedSolutions from '../components/FeaturedSolutions'

export default function Home() {
    return (
        <>
            <Hero >
                <Banner title="BUSINESS SOLUTIONS" subtitle="FOCUSED ON QUALITY APPLICATION DELIVERY">
                    <Link to="/solutions" className="btn-primary">
                        our solutions
                    </Link>
                </Banner>
            </Hero>
            <About />
            <FeaturedSolutions />
        </>
    )
}
