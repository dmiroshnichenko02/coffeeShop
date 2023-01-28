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
                        <li className='footer-list-item'>Coffee house</li>
                        <li className='footer-list-item'>Our coffee</li>
                        <li className='footer-list-item'>For your pleasure</li>
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