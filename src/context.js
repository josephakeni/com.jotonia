import React, { Component } from 'react'
// import { FaTruckLoading } from 'react-icons/fa';
import items from './data'
import Solutions from './pages/Solutions';
const SolutionContext = React.createContext();
// <

class SolutionProvider extends Component {
    state={
        solutions:[],
        sortedSolutions:[],
        featuredSolutions:[],
        loading: true
    };
    // getData

    componentDidMount(){
        // this.getData
        let solutions = this.formatData(items);
        let featuredSolutions = solutions.filter(solution => solution.featured === true);
        this.setState({
            solutions,featuredSolutions,sortedSolutions:solutions,loading:false
        })
    }

    formatData(items){
        let tempItems=items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let solution ={...item.fields,images,id}
            return solution
        });
        return tempItems
    }

    getSolution = (slug) => {
        let tempSolutions = [...this.state.solutions];
        const solution = tempSolutions.find(solution => solution.slug === slug);
        return solution
    }



    render() {
        return (
            <SolutionContext.Provider value={{...this.state, getSolution: this.getSolution}}>
                {this.props.children}
            </SolutionContext.Provider>
        )
    }
}

const SolutionConsumer = SolutionContext.Consumer;

export function withSolutionConsumer(Component) {
    return function ConsumerWrapper(props){
        return <SolutionConsumer>
            {value => <Component {...props} context={value}/>}
        </SolutionConsumer>
    }
}

export {SolutionProvider, SolutionConsumer, SolutionContext};