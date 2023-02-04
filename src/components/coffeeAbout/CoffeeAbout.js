import './coffeeAbout.scss';
import coffeeDivider from '../../resourses/img/coffee-divider-bean-black.svg';

const CoffeeAbout = () => {
    return (
        <div className="about" id='about'>
            <div className="container">
                <h2 className="about-title">About Us</h2>
                <div className="about-divider">
                    <span className='span-1'></span>
                    <img src={coffeeDivider} alt="coffee-bean" className='coffee-bean-divider' />
                    <span className='span-2'></span>
                </div>
                <p className="about-descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    <span> is song that held help face.</span> <br /><br/>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    <span> repair day ladies now.</span>
                </p>
            </div>
        </div>
    )
}

export default CoffeeAbout;