import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemById } from '../actions';

class ItemList extends Component{
    render(){
        return(
            <div>
                <h4>Items</h4>
                <ul className='list-group'>
                    {
                        this.props.items.map(item =>{
                            return (
                                <li key={item.id} className='list-group-item'>
                                    <div className='list-item'>{item.name}</div>
                                    <div className='list-item right-button' onClick={()=> this.props.addItemById(item.id)}>+</div>
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
        items: state.items
    };
}

export default connect(mapStateToProps, { addItemById })(ItemList);