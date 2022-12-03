import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export  function Catalogue() {
  return (
    <div>
        <h2>All products</h2>
        <ul>
            <li><Link to="/products/1">Products 1</Link></li>
            <li><Link to="/products/2">Products 2</Link></li>
            <li><Link to="/products/3">Products 3</Link></li>
            <li><Link to="/products/4">Products 4</Link></li>
            <li><Link to="/products/5">Products 5</Link></li>
            <li><Link to="/products/6">Products 6</Link></li>
        </ul>
        <hr/>
        <Outlet />
    </div>
  )
}
