import { Helmet } from "react-helmet";


import CoffeeHeader from "../coffeeHeader/CoffeeHeader";
import CoffeeAbout from "../coffeeAbout/CoffeeAbout";
import CoffeeOur from "../coffeeOur/CoffeeOur";

const MainPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Coffee Shop main page"
                />
                <title>Coffee Shop</title>
            </Helmet>
            <header>
                <CoffeeHeader />
            </header>
            <main>
                <CoffeeAbout />
                <CoffeeOur />
            </main>
        </>
    )
}

export default MainPage;