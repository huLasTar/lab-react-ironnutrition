// src/App.js
import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [getFoods, setFoods] = useState(foods);
  const [getFoodsData, setFoodsData] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoods = [...getFoods, newFood];
    const updatedFoodsData = [...getFoodsData, newFood];

    setFoods(updatedFoods);
    setFoodsData(updatedFoodsData);
  };

  return (
    <div className="App">
      <Row>
        <Col span={12} offset={6}>
          <AddFoodForm AddFoodForm={addNewFood} />
        </Col>
      </Row>
      <Row gutter={16}>
        {getFoods.map((food, key) => {
          return <FoodBox key={key} food={food} />;
        })}
      </Row>
    </div>
  );
}
export default App;
