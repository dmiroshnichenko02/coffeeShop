import { Link } from 'react-router-dom';

import './coffeeCards.scss';
import coffeeCard from '../../resourses/img/coffee-card-aromistico.jpg';

const CoffeeCards = (props) => {
    const { data } = props;
    const items = data.map((item) => {
        const { name, country, price, id } = item;
        return (
            <Link to={`/our/${id}` } key={id}>
                <div className="cards-item">
                    <img src={coffeeCard} alt="coffee" />
                    <div className="cards-title">{name}</div>
                    <div className="cards-country">{country}</div>
                    <div className="cards-price">{price}$</div>
                </div>
            </Link>
        )
    })
    return (
        <div className="cards">
            <div className="container">
                <div className="cards-wrapper">
                    {items}
                </div>
            </div>
        </div>
    )
}

export default CoffeeCards;