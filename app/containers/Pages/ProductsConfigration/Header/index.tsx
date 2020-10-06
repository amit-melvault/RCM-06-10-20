import React from 'react';
import './HeaderStyle.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <React.Fragment>
              <div className="header_Style">
                    <Link to="" >Price item action type</Link>
                    <Link to="" style={{marginLeft:"20px"}}>Products</Link>
                </div>
        </React.Fragment>
    )
}
