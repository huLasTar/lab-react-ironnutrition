import React from 'react';
import { Card, Col, Button } from 'antd';

// Iteration 2:
function FoodBox(props) {
  const { food } = props;

  // Iteration 6:
  const deleteFood = (singleFood) => {
    props.deletedFood(singleFood);
  };

  return (
    <Col className="gutter-row" span={3}>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} alt={food.name} height={60} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(props.food)}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
