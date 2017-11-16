import React, {Component} from 'react';
import ItemList from './ItemList';
import Cart from './Cart';
import CartStats from './CartStats';
import '../styles/index.css';

class App extends Component{
    render(){
        return(
            <div className="App">
                <h2>Super Squad</h2>
                <div className='col-md-4'>
                    <ItemList/>
                </div>
                <div className='col-md-4'>
                    <Cart/>
                </div>
                <div className='col-md-4'>
                    <CartStats/>
                </div>
            </div>
        );
    }
}

export default App;