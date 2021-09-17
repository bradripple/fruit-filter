import './App.css';
import FruitContainer from './FruitContainer';
import SweetsContainer from './SweetsContainer';
import VeggieContainer from './VeggieContainer';
import MeatContainer from './MeatContainer';

function App() {
  const fruitArr = ['Cherrie 🍒', 'Coconut 🥥', 'Apple 🍎', 'Banana 🍌', 'Kiwi 🥝', 'Pineapple 🍍', 'Strawberry 🍓', 'Mango 🥭']
  const veggieArr = ['Corn 🌽', 'Tomato 🍅', 'Cucumber 🥒', 'Peppers 🌶', 'Broccoli 🥦', 'Lettuce 🥬', 'Eggplant 🍆', 'Carrots 🥕']
  const sweetArr = ['Ice Cream 🍨', 'Cake 🍰', 'Chocolate 🍫', 'Lollipop 🍭', 'Donut 🍩', 'Cookie 🍪']
  const meatArr = ["Beef 🥩", "Chicken 🍗", "Pork 🐷", "Hot Dog 🌭"];

  return (
    <div>
        <h1>Food Filter</h1>
      <div className="App">
        <FruitContainer fruits={fruitArr} />
        <VeggieContainer veggies={veggieArr} />
        <SweetsContainer sweets={sweetArr} />
        <MeatContainer meats={meatArr} />

      </div>
    </div>
  );
}

export default App;



