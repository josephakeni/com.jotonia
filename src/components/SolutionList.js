import React from 'react'
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils'
import Solution from './Solution'

export default function SolutionList({solutions}) {
    if (solutions.length === 0) {
        return (
            <div className="empty-search">
                <h3>we do not offer such</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    solutions.map(item => {
                        return <Solution key={item.id} solution={item} />
                    })
                }
            </div>
            {/* <div>
                Hello from Solution list 
            </div> */}
        </section>
       
    )
}
