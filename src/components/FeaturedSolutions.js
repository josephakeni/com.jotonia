import React, { Component } from 'react'
import {SolutionContext} from '../context'
import Loading from './Loading';
import Solution from './Solution'
import Title from './Title'
export default class FeaturedSolutions extends Component {
    static contextType = SolutionContext;
    render() {
        let {loading, featuredSolutions : solutions} = this.context;
        solutions = solutions.map(solution => {
            return <Solution key={solution.id} solution={solution} />
        })
        return (
            <section className="featured-rooms">
                <Title title="featured solutions" />
                <div className="featured-rooms-center"> 
                    {loading ? <Loading /> : solutions}
                </div>

            </section>
        )
    }
}
