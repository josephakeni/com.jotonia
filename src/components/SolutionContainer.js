import React from 'react'
import SolutionsList from './SolutionList'
import {withSolutionConsumer} from '../context'
import Loading from './Loading'


function SolutionContainer({context}){
const {loading,sortedSolutions,solutions} = context;
    if(loading){
        return <Loading />
    }
    return (
        <>
        <SolutionsList solutions={sortedSolutions} />   
        </>
    )
}

export default withSolutionConsumer(SolutionContainer)




// import React from 'react'
// import SolutionsList from './SolutionList'
// import {SolutionConsumer} from '../context'
// import Loading from './Loading'

// export default function SolutionContainer() {
//     return (
//         <SolutionConsumer>
//             {
//                (value) => {
//                    const {loading,SortedSolutions,solutions} = value
//                    if(loading){
//                        return <Loading />
//                    }
//                    return (
//                     <div>
//                     Hello from Solutions Container 
//                     <SolutionsList solutions={SortedSolutions} />   
//                 </div>
//                    )
//                } 
//             }
//         </SolutionConsumer>
        
//     )
// }
