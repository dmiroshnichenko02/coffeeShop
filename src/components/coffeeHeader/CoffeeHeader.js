import './coffeeHeader.scss';
import coffeeBean from '../../resourses/img/coffee-bean-header.svg'
import coffeeDivider from '..//..//resourses/img/coffee-divider-bean-white.svg'

const CoffeeHeader = () => {
    return (
        <div className="header">
            <div className="container">
                <nav className="header-nav">
                    <img src={coffeeBean} alt="coffee-bean-header" className='coffee-bean' />
                    <ul className="header-nav-list">
                        <li className="header-nav-item"><a href="#">Coffee house</a></li>
                        <li className="header-nav-item"><a href="#">Our coffee</a></li>
                        <li className="header-nav-item"><a href="#">For your pleasure</a></li>
                    </ul>
                </nav>
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