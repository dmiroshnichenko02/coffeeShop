import './coffeeOurPage.scss';
import CoffeeNavigation from "../coffeeNavigation/CoffeeNavigation"



const CoffeeOurPage = () => {
    return (
        <div className="header-our header">
            <div className="container">
                <CoffeeNavigation/>
                <h1 className="header-title header-our-title">Our Coffee</h1>
            </div>
        </div>
    )
}

export default CoffeeOurPage