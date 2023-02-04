import { Link } from 'react-router-dom';
import { useState } from 'react';

import './coffeeNavigation.scss';

const CoffeeNavigation = () => {

    const [active, setActive] = useState(false)

    const openModal = () => {
        setActive(true);
        document.body.style.overflow = 'hidden';
    }
    const closeModal = () => {
        setActive(false);
        
        document.body.style.overflow = '';
    }

    let stylezz = 'hamburger-block'
    if(active) {
        stylezz += ' active'
    }
    return (
        <>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item nav-beans"><Link to="/">Coffee house</Link></li>
                    <li className="nav-item"><Link to="/our">Our coffee</Link></li>
                    <li className="nav-item"><Link to="/goods">For your pleasure</Link></li>
                </ul>
            </nav>
            <div className="sm-block">
                <div className="hamburger-open" onClick={openModal} style={{opacity: active ? 0 : 1}}>Open</div>
                <div className="hamburger">
                    <div className={stylezz}>
                        <div className="hamburger-close" onClick={closeModal}>Close</div>
                        <div className="ul hamburger-list">
                            <li className="hamburger-item" onClick={closeModal}><Link to="/">Coffee house</Link></li>
                            <li className="hamburger-item" onClick={closeModal}><Link to="/our">Our coffee</Link></li>
                            <li className="hamburger-item" onClick={closeModal}><Link to="/goods">For your pleasure</Link></li>
                        </div>
                    </div>
                </div>
                <div className="overlay" style={{ visibility: active ? 'visible' : 'hidden' }}></div>
            </div>
        </>
    )
}

export default CoffeeNavigation;