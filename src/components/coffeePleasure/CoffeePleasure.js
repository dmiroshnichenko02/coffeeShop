import CoffeeNavigation from "../coffeeNavigation/CoffeeNavigation"

import './coffeePleasure.scss'

const CoffeePleasure = () => {
    return (
        <div className="header-our header header-goods">
            <div className="container">
                <CoffeeNavigation/>
                <h1 className="header-title header-our-title">For your pleasure</h1>
            </div>
        </div>
    )
}

export default CoffeePleasure