import './coffeeAboutOur.scss';
import coffeeDivider from '../../resourses/img/coffee-divider-bean-black.svg';
import coffeeWomanPhoto from '../../resourses/img/coffee-about-photo.jpg';


const CoffeeAboutOur = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about-wrapper">
                    <img src={coffeeWomanPhoto} alt="coffee-cup-woman" className="about-img" />
                    <div className="about-item">
                        <h2 className="about-title">About our beans</h2>
                        <div className="about-divider">
                            <span className='span-1 span-3'></span>
                            <img src={coffeeDivider} alt="coffee-bean" className='coffee-bean-divider' />
                            <span className='span-2 span-4'></span>
                        </div>
                        <p className="about-descr about-our-descr">
                            Extremity sweetness difficult behaviour he of. On<br /> disposal of as landlord horrible.<br /><br />
                            Afraid at highly months do things on at. Situation recommend objection do intention<br />
                            so questions.<br />
                            As greatly removed calling pleased improve an.<br />
                            Last ask him cold feel<br />
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                            is song that held help face
                        </p>
                    </div>
                </div>
                <div className="about-low-divider"></div>
            </div>
        </div>
    )
}

export default CoffeeAboutOur;