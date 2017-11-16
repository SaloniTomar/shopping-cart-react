import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartStats extends Component{

    price(){
        let price=0;
        this.props.items.forEach(item=>price+=item.price);
        return price;
    }

    render(){
        return(
            <div>
                <h4>Your Cart Total</h4>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <div className='list-item'><b>Overall Price:</b>{this.price()}</div>
                    </li>
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
      items: state.items
    };
}

export default connect(mapStateToProps, null)(CartStats);