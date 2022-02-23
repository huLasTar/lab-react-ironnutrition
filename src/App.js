// src/App.js
import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { Card, Row, Col, Divider, Button } from 'antd';
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

  // Iteration 6:
  const deleteAFood = (selected) => {
    const copiedFoods = [...getFoods];

    const filteredFoods = copiedFoods.filter(function (food) {
      return food.name !== selected.name;
    });

    setFoods(filteredFoods);
  };

  // Iteration 7:
  const [showAddFoodForm, setShowAddFoodForm] = useState(false);

  const toggleAddFoodForm = () => {
    setShowAddFoodForm(!showAddFoodForm);
  };

  return (
    <div className="App">
      <Row>
        <Col span={12} offset={6}>
          <Button onClick={toggleAddFoodForm}>
            {showAddFoodForm ? 'Cancel' : 'Add New Food'}
          </Button>
        </Col>
      </Row>

      {showAddFoodForm && (
        <Row>
          <Col span={12} offset={6}>
            <AddFoodForm AddFoodForm={addNewFood} />
          </Col>
        </Row>
      )}
      <Row gutter={16}>
        {getFoods.map((food) => {
          return (
            <FoodBox
              key={Math.random()}
              food={food}
              deletedFood={deleteAFood}
            />
          );
        })}
      </Row>
    </div>
  );
}
export default App;
