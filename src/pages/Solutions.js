import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import SolutionContainer from '../components/SolutionContainer'
import SolutionList from '../components/SolutionList'

function Solutions() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our solutions">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
        <SolutionContainer />
        </>
    )
}

export default Solutions
