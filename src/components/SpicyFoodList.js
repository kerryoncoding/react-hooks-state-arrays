import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...spicyFoods, newFood]
    setFoods(newFoodArray)
    //setFoods([...spicyFoods, newFood])
  }

  const foodList = foods.map((food) => (
 // <li key={food.id} onClick={()=> deleteFood(food.id)}>
    <li key={food.id} onClick={()=> incrementHeat(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  // function deleteFood(id){
  //   const newFoodArray = foods.filter((element) => element.id != id)
  //   setFoods(newFoodArray)
  // }

  function incrementHeat(id){
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  function filter(e){
    // console.log(e.target.value)
    // console.log(foods.cuisine)
   const newFoodArray = foods.filter( element => element.cuisine == e.target.value)
   setFoods(newFoodArray)
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={filter} >
        <option value="All" >All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
      
    </div>
  );
}

export default SpicyFoodList;
