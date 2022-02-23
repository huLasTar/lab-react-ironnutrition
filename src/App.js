// src/App.js
import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { Footer } from 'antd/lib/layout/layout';

function App() {
  const [getFoods, setFoods] = useState(foods);

  return (
    <div className="App">
      {getFoods.map((food, key) => {
        return (
          <div key={key}>
            <p> {food.name} </p>
            <img src={food.image} alt={food.name} width={200} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
