import React from 'react'
//import './Table.scss'

const Table: React.FC = ()=>{
    return <table>
        <thead>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
        </thead>
            <tr>
                <td>Cookie</td>
                <td>1,25</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Potato</td>
                <td>0,50</td>
                <td>8</td>
            </tr>
        <tbody>

        </tbody>
    </table>
}

export default Table