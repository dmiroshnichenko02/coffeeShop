import './coffeeOur.scss';
import firstCoffeeCard from '../../resourses/img/coffee-card-solimo.jpg';
import secondCoffeeCard from '../../resourses/img/coffee-card-presto.jpg';
import thirdCoffeeCard from '../../resourses/img/coffee-card-aromistico.jpg';

const CoffeeOur = () => {
    return (
        <div className="our">
            <div className="container">
                <h2 className="our-title">Our best</h2>
                <div className="our-wrapper">
                    <div className="our-item">
                        <img src={firstCoffeeCard} alt="solimo" />
                        <div className="our-item-title">Solimo Coffee Beans 2 kg</div>
                        <div className="our-item-price">10.73$</div>
                    </div>
                    <div className="our-item">
                        <img src={secondCoffeeCard} alt="presto" />
                        <div className="our-item-title">Presto Coffee Beans 1 kg</div>
                        <div className="our-item-price">15.99$</div>
                    </div>
                    <div className="our-item">
                    <img src={thirdCoffeeCard} alt="aromistico" />
                    <div className="our-item-title">AROMISTICO Coffee 1 kg</div>
                    <div className="our-item-price">6.99$</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeOur;