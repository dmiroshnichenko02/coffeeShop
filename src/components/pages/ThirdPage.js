import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import CoffeePleasure from "../coffeePleasure/CoffeePleasure";
import CoffeeGoods from "../coffeeGoods/CoffeeGoods";
import CoffeeCards from "../coffeeCards/CoffeeCards";
import CoffeeService from "../service/CoffeeService";



const ThirdPage = () => {
    const [data, setData] = useState([])

    const { getCoffeeCards } = CoffeeService();
    console.log('render')
    useEffect(() => {
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
            <Helmet>
                <meta
                    name="description"
                    content="Your goods"
                />
                <title>Coffee pleasure</title>
            </Helmet>
            <CoffeePleasure />
            <CoffeeGoods />
            <CoffeeCards data={data} btn={true} />
        </>
    )
}

export default ThirdPage;