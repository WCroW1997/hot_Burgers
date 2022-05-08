import React from 'react';
import MenuAdmin from './MenuAdmin';
import Order from './Order';
import Header from './Header';
import Burger from './Burger';
import base from '../base'

import sampleBurgers from '../sample-burgers'
import { json } from 'stylus/lib/functions';

class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    }

    componentDidMount(){
        const {params} = this.props.match

        const localStorageRef = localStorage.getItem(params.restaurantId)
        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${params.restaurantId}/burgers`,{
            context: this,
            state: 'burgers'
        })
    }

    componentDidUpdate(){
        const {params} = this.props.match
        localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))
    }

    componentWillUnmount(){
        base.removeBinding(this.ref)
    }

    addBurger = burger =>{
        const burgers = {...this.state.burgers}
        burgers[` burger${Date.now()}`] = burger
        this.setState({burgers})
    }

    loadSampleBurgers = () =>{
        this.setState({burgers: sampleBurgers})
    }

    addToOrder = (key) =>{
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1
        this.setState({order})
    }


    render(){
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="Hot Burgers"/>
                    <ul className='burgers'>
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger key={key} 
                            index={key}
                            details={this.state.burgers[key]}
                            addToOrder={this.addToOrder}
                            />
                        })}
                    </ul>
                </div>
                <Order burgers={this.state.burgers} order={this.state.order}/>
                <MenuAdmin addBurger={this.addBurger} loadSampleBurgers={this.loadSampleBurgers}/>
            </div>
        )
    }

}

export default App