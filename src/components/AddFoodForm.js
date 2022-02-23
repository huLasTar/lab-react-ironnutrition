import React from 'react';
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const [getName, setName] = useState('');
  const [getImage, setImage] = useState('');
  const [getCalories, setCalories] = useState('');
  const [getServings, setServings] = useState('');

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { getName, getImage, getCalories, getServings };

    console.log('Submitted: ', newFood);
    props.AddFoodForm(newFood);

    // Reset the state
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form className="AddFoodForm" onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={getName} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <Input value={getImage} type="text" onChange={handleImageInput} />

      <label>Calories</label>
      <Input value={getCalories} type="number" onChange={handleCaloriesInput} />

      <label>Servings</label>
      <Input value={getServings} type="number" onChange={handleServingsInput} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
