import CoffeePleasure from "../coffeePleasure/CoffeePleasure";
import CoffeeGoods from "../coffeeGoods/CoffeeGoods";
import CoffeeCards from "../coffeeCards/CoffeeCards";
import CoffeeService from "../service/CoffeeService";

import { useState, useEffect } from "react";

const ThirdPage = () => {
    const [data, setData] = useState([])

    const {getCoffeeCards} = CoffeeService();
    console.log('render')
    useEffect (() => {
        onRequest()
    }, [])

    const onRequest = () => {
        getCoffeeCards()
            .then(data => onCardsLoad(data))
    }

    const onCardsLoad = (newData) => {
        setData(data => [...data, ...newData]);
    }

    return (
        <>
            <CoffeePleasure/>
            <CoffeeGoods />
            <CoffeeCards data={data} btn={true}/>
        </>
    )
}

export default ThirdPage;