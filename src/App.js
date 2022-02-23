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
      <Row gutter={16}>
        {getFoods.map((food) => {
          return <FoodBox food={food} />;
        })}
      </Row>
    </div>
  );
}
export default App;
