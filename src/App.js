// src/App.js
import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';

function App() {
  const [getFoods, setFoods] = useState(foods);

  return (
    <div className="App">
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />

      {getFoods.map((food) => {
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} alt={food.name} width={200} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
