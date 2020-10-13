import React, { Component } from 'react'
import defaultBcg from '../images/defaultBcg.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {SolutionContext} from '../context'
import StyledHero from '../components/StyledHero'

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
        const {name,description,description1,description2,description3,images} = solution
        const [mainImg, ...defaultImg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} solution`}>
                    <Link to='/solutions' className='btn-primary'>
                        back to solutions
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                {/* <div className="single-room-images">
                    {defaultImg.map((item, index) => {
                        return <img key={index} src={item} alt={name} />
                    })}
                </div> */}
                <div className="single-room-info">
                    <article className="desc">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <p>{description1}</p>
                        <p>{description2}</p>
                        <p>{description3}</p>
                    </article>
                    {/* <article className="info">
                        <h3>info</h3>
                        <p>price: {price}</p>
                    </article> */}
                </div>
            </section>
            </>
        )
    }
}



