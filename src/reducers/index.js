import { combineReducers } from 'redux';
import cart from './cart_reducer';
import items from './items_reducer';

const rootReducer = combineReducers({
  cart,
  items
})

export default rootReducer;