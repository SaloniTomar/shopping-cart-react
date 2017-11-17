import { combineReducers } from 'redux';
import addedItems from './cart_reducer';
import items from './items_reducer';

const rootReducer = combineReducers({
  addedItems,
  items
})

export default rootReducer;
