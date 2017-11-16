import items_json from '../data/items.json';
import { ADD_ITEM, REMOVE_ITEM } from '../actions';
import { createItem } from './helpers';

function items(state= items_json, action){
    switch(action.type){
        case ADD_ITEM:
            let items = state.filter(item=>  item.id !== action.id);
            return items;
        case REMOVE_ITEM:
            items =  [...state, createItem(action.id)];
            return items;
        default:
            return state;
    }
}

export default items;