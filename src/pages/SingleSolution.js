import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {SolutionContext} from '../context'

export default class SingleSolution extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = SolutionContext;
    // componentDidMount() {}
    render() {
        const {getSolution} = this.context;
        const solution = getSolution(this.state.slug);
        if(!solution){
            return <div className="error">
                <h3>no such solution found</h3>
                <Link to="/solutions" className="btn-primary">
                    back to solutions
                </Link>
            </div>
        }
        // update this!!!
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = solution
        return (
            <Hero hero="roomsHero">
                <Banner title={`${name} solution`}>
                    <Link to='/solutions' className='btn-primary'>
                        back to solutions
                    </Link>
                </Banner>
            </Hero>
        )
    }
}



