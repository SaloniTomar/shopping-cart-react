import items_json from '../data/items.json';

export function createItem(id){
    let item = items_json.find(c=> c.id ===id);
    return item;
}

