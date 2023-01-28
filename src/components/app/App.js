import CoffeeHeader from "../coffeeHeader/CoffeeHeader";
import CoffeeAbout from "../coffeeAbout/CoffeeAbout";
import CoffeeOur from "../coffeeOur/CoffeeOur";
import CoffeeFooter from "../coffeeFooter/CoffeeFooter";


const App = () => {
  return (
    <div>
      <header>
        <CoffeeHeader />
      </header>
      <main>
        <CoffeeAbout />
        <CoffeeOur />
      </main>
      <footer>
        <CoffeeFooter />
      </footer>
    </div>
  );
}

export default App;
