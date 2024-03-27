//@ts-nocheck

import React from "react";
import styles from "./meals-grid.module.css";
import MealItem from "./meal-item";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id + Math.random()}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
};

export default MealsGrid;
