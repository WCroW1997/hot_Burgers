import React from 'react';
import MenuAdmin from './MenuAdmin';
import Order from './Order';
import Header from './Header';
import sampleBurgers from '../sample-burgers'

class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    }

    addBurger = burger =>{
        const burgers = {...this.state.burgers}
        burgers[` burger${Date.now()}`] = burger
        this.setState({burgers})
    }

    loadSampleBurgers = () =>{
        this.setState({burgers: sampleBurgers})
    }


    render(){
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title="Hot Burgers"/>
                    
                </div>
                <Order/>
                <MenuAdmin addBurger={this.addBurger} loadSampleBurgers={this.loadSampleBurgers}/>
            </div>
        )
    }

}

export default App