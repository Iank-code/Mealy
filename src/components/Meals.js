import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMeals } from "../features/mealSlice.js";

const ManageMeals = () => {
  const meals = useSelector((state) => state.meals.list);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMeals());
  // }, [dispatch]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/meals")
      .then((res) => res.json())
      .then((res) => console.log(data));
  }, []);

  return (
    <div>
      <h2>Manage Meals</h2>
      {/* You can add meal management features here. For now, just list the meals */}
      {/* <ul> */}

        {/* {meals.map((meal) => {
          console.log(meal);
          return <li key={meal.id}>{meal.name}</li>;
        })} */}
      {/* </ul> */}
    </div>
  );
};

export default ManageMeals;
// http://127.0.0.1:5000/meals
