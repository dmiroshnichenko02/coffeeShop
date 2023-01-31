import {Link} from 'react-router-dom';


import './coffeeFooter.scss';
import coffeeBean from '../../resourses/img/coffee-bean-footer.svg';
import coffeeDivider from '../../resourses/img/coffee-divider-bean-black.svg';


const CoffeeFooter = () => {
    return (
        <div className="footer">
            <div className="container">
                <nav className="footer-navigation">
                    <img src={coffeeBean} alt="coffee-bean" className='footer-coffee-bean' />
                    <ul className='footer-list'>
                        <li className='footer-list-item'><Link to="/">Coffee house</Link></li>
                        <li className='footer-list-item'><Link to="/our">Our coffee</Link></li>
                        <li className='footer-list-item'><Link to="/goods">For your pleasure</Link></li>
                    </ul>
                </nav>
                <div className="footer-divider">
                    <span className='span-1'></span>
                    <img src={coffeeDivider} alt="coffee-bean" className='coffee-bean-divider' />
                    <span className='span-2'></span>
                </div>
            </div>
        </div>
    )
}

export default CoffeeFooter;