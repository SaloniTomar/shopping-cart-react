import { ADD_ITEM, REMOVE_ITEM } from '../actions';
import { createItem } from './helpers';

function addedItems(state = [], action){
    switch(action.type){
        case ADD_ITEM:
            let addedItems  = [...state, createItem(action.id)];
            return addedItems;
        case REMOVE_ITEM:
            addedItems = state.filter(item=>  item.id !== action.id);
            return addedItems;
        default:
            return state;
    }
}

export default addedItems;

