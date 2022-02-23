// src/App.js
import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import { Row, Col, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [getFoods, setFoods] = useState(foods);
  const [getFoodsData, setFoodsData] = useState(foods);
  const [showAddFoodForm, setShowAddFoodForm] = useState(false);
  const [getNoFoods, setNoFoods] = useState(false);

  // Iteration 4:
  const addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...getFoods];
    const updatedFoodsData = [newFood, ...getFoodsData];

    setFoods(updatedFoods);
    setFoodsData(updatedFoodsData);
  };

  // Iteration 5:
  const searchFood = (searchTerm) => {
    const searchResult = getFoodsData.filter((food) => {
      return food.name.toLowerCase().includes(searchTerm);
    });

    setFoods(searchResult);
  };

  // Iteration 6:
  const deleteAFood = (selected) => {
    const copiedFoods = [...getFoods];

    const filteredFoods = copiedFoods.filter(function (food) {
      return food.name !== selected.name;
    });

    setFoods(filteredFoods);

    // Iteration 8:
    if (filteredFoods.length < 1) {
      setNoFoods(!getNoFoods);
    }
  };

  // Iteration 7:
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
      <Row>
        <Col span={12} offset={6}>
          <Search handleSearch={searchFood} />
        </Col>
      </Row>
      <Row gutter={16}>
        {getNoFoods && <h4>There are no foods in the list.</h4>}
        {getFoods.map((food, key) => {
          return <FoodBox key={key} food={food} deletedFood={deleteAFood} />;
        })}
      </Row>
    </div>
  );
}
export default App;
