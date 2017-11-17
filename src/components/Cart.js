import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemById } from '../actions';

class Cart extends Component{
    render(){
        return(
            <div>
                <h4>Your Selected Items</h4>
                <ul className='list-group'>
                    {
                        this.props.addedItems.map(item =>{
                            return (
                                <li key={item.id} className='list-group-item'>
                                    <div className='list-item'><b>{item.name}</b></div><br/>
                                    <div className='list-item'><b>Price :</b> Rs.{item.price}</div><br/>
                                    <div className='list-item'><b>Material :</b>{item.description.material}</div>
                                    <div className='list-item right-button' onClick={()=> this.props.removeItemById(item.id)}>x</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        addedItems: state.addedItems
    };
}

export default connect(mapStateToProps, { removeItemById })(Cart);
