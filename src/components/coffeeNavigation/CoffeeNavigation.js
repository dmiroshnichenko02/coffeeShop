import {Link} from 'react-router-dom';

import './coffeeNavigation.scss';
import coffeeBean from '../../resourses/img/coffee-bean-header.svg'

const CoffeeNavigation = () => {
    return (
        <nav className="nav">
            <img src={coffeeBean} alt="coffee-bean-header" className='coffee-bean' />
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Coffee house</Link></li>
                <li className="nav-item"><Link to="/our">Our coffee</Link></li>
                <li className="nav-item"><Link to="/goods">For your pleasure</Link></li>
            </ul>
        </nav>
    )
}

export default CoffeeNavigation;