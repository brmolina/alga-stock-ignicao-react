
import { Action } from ".."
import Products from "../../shared/Table/Table.mockdata"

export default function(state = Products, action: Action) {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return [...action.payload]
        case 'INSERT_NEW_PRODUCT' :
            return [...state, {
                    ...action.payload,
                    _id: String(state.length + 1),
                }]
        default:
            return state 
    }
}