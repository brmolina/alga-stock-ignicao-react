import { Product } from "../../shared/Table/Table.mockdata"
import { Action } from "./Products.reducer"

export const insertNewProduct = (): Action<Product> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: {
            _id: 'awej54223;zxcc.a56',
            name: 'Cookie',
            price: 1.19,
            stock: 20
        }
    }
}