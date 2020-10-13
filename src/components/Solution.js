import React from 'react'
import {Link} from 'react-router-dom'
import defaultImg from '../images/defaultBcg.jpeg'
import PropTypes from 'prop-types'
import Solutions from '../pages/Solutions';

export default function Solution({solution}) {
    const{name,slug,images,price,description,shortDesc} = solution;

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single solution" />
                {/* <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div> */}
                <Link to={`/solutions/${slug}`} className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
            <p>{shortDesc}</p>
        </article>
    )
}

Solution.propTypes = {
    solution:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}