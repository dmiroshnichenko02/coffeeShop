import CoffeeHeader from "../coffeeHeader/CoffeeHeader";
import CoffeeAbout from "../coffeeAbout/CoffeeAbout";
import CoffeeOur from "../coffeeOur/CoffeeOur";

const MainPage = () => {
    return (
        <>
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