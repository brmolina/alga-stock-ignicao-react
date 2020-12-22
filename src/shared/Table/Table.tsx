import React from 'react'
import './Table.scss'

const Table: React.FC = ()=>{
    return <table className="AppTable">
        <thead>
          <tr>
          <th>Product</th>
                <th>Price</th>
                <th className="right">Stock</th>
          </tr>
        </thead>

        <tbody>
            <tr>
                <td>Cookie</td>
                <td>1,25</td>
                <td className="right">10</td>
            </tr>
            <tr>
                <td>Potato</td>
                <td>0,50</td>
                <td className="right">8</td>
            </tr>
        </tbody>
    </table>
}

export default Table