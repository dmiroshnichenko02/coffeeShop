import CoffeeNavigation from '../coffeeNavigation/CoffeeNavigation';

import './coffeeHeader.scss';
import coffeeDivider from '..//..//resourses/img/coffee-divider-bean-white.svg'

const CoffeeHeader = () => {
    return (
        <div className="header">
            <div className="container">
                <CoffeeNavigation/>
                <h1 className="header-title">Everything You Love About Coffee</h1>
                <div className="header-divider">
                    <span className='span-1'></span>
                    <img src={coffeeDivider} alt="coffee-bean" className='coffee-bean-divider' />
                    <span className='span-2'></span>
                </div>
                <div className="header-descr">We makes every day full of energy and taste</div>
                <div className="header-subdescr">Want to try our beans?</div>
                <div className="header-btn">More</div>
            </div>
        </div>
    )
}

export default CoffeeHeader;