import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './coffeeOur.scss';

import firstCoffeeCard from '../../resourses/img/coffee-card-solimo.jpg';
import secondCoffeeCard from '../../resourses/img/coffee-card-presto.jpg';
import thirdCoffeeCard from '../../resourses/img/coffee-card-aromistico.jpg';
import CoffeeService from '../service/CoffeeService';
import CoffeeLoading from "../loading/CoffeeLoading";
import ErrorMessage from "../errorMessage/ErrorMessage";

const CoffeeOur = () => {

    const [data, setData] = useState([]);

    const { getFavoriteCards, loading, error } = CoffeeService();

    useEffect(() => {
        onRequest()
    }, [])

    const onRequest = () => {
        getFavoriteCards()
            .then(data => onCardsLoad(data))
    }

    const onCardsLoad = (newData) => {
        setData(data => [...data, ...newData]);
    }

    const items = data.map(item => {
        const { name, price, id } = item;
        return (
            <Link to={`/our/${id}`} key={id}>
                <div className="our-item">
                    <img src={firstCoffeeCard} alt={name} />
                    <div className="our-item-title">{name}</div>
                    <div className="our-item-price">{price}$</div>
                </div>
            </Link>
        )
    })
    const load = loading ? <CoffeeLoading/> : null
    const errorMessage = error ? <ErrorMessage/> : null

    return (
        <div className="our">
            <div className="container">
                <h2 className="our-title">Our best</h2>
                <div className="our-wrapper">
                    {load}
                    {errorMessage}
                    {items}
                </div>
            </div>
        </div>
    )
}

export default CoffeeOur;