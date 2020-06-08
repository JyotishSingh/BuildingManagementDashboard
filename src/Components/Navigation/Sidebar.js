import React from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Sidebar = ({ data }) => {

    const links = data.map((b, indexB) => {
        return <Router>
            <ul key={indexB}>{b.name}
                {b.floors.map((f, indexF) => {
                    return <li key={indexF}><ul>{f.name}
                        {f.rooms.map((r, indexR) => {
                            return <ul key={indexR + indexF}><li key={indexR}><Link to={`/${b.name}/${f.name}/${r.name}`}>{r.name}</Link></li></ul>
                        })}
                    </ul>
                    </li>
                })
                }
            </ul>

        </Router>
    })

    return (
        <div className='sidebar'>
            {links}
        </div>
    )
}


export default Sidebar