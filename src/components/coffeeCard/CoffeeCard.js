import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import coffeeDivider from '../../resourses/img/coffee-divider-bean-black.svg';
import coffeeCardImg from '../../resourses/img/coffee-single-card.jpg';
import CoffeeService from '../service/CoffeeService';

import './coffeeCard.scss';


const CoffeeCard = () => {

    const {coffeeId} = useParams()
    const [coffee, setCoffee] = useState({});

    const { getCoffeeCard } = CoffeeService();

    useEffect(() => {
        updateCard();
    }, [coffeeId])

    const updateCard = () => {
        getCoffeeCard(coffeeId)
            .then(onCardLoaded)
    }

    const onCardLoaded = (coffee) => {
        setCoffee(coffee)
    }

    return (
        <View coffee={coffee}/>
    )

}
const View = ({ coffee }) => {

    const { country, price } = coffee

    return (
        <div>
            <div className="single-card">
                <img src={coffeeCardImg} alt="cards" className="single-card-img" />
                <div className="single-card-item">
                    <div className="single-card-title">About it</div>
                    <div className="about-divider">
                        <span className='span-1 span-3'></span>
                        <img src={coffeeDivider} alt="coffee-bean" className='coffee-bean-divider' />
                        <span className='span-2 span-4'></span>
                    </div>
                    <div className="single-card-country"><span>Country: </span>{country}</div>
                    <p className="single-card-descr"><span>Description: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aliquid mollitia omnis perspiciatis, ad eligendi temporibus accusantium, a quidem, et recusandae quis repellat ratione rerum nulla dolorum ducimus quae itaque?</p>
                    <div className="single-card-price"><span>Price: </span>{price}$</div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard;