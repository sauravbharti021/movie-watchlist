import React from 'react'
import { Link , Outlet} from 'react-router-dom';
import { Fragment } from 'react'

const Navigation = () => {
  return (
    <Fragment>

        <header>
            <div className='container'>
                <div className='inner-content'>
                    <div className='brand'>
                        <Link to="/">Movie-Watchlist</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/">Watch List</Link>
                        </li>

                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>

                        <li>
                            <Link to="/add" className='btn'>+ Add</Link>
                        </li>
                    </ul>


                </div>
            </div>
        </header> 
        <Outlet />
    </Fragment>
  )
}
export default Navigation; 