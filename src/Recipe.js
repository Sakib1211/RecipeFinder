import React from "react";
import style from "./food.module.css";

const Recipe = ({ title, ingredients, calories, image }) => {
  function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className={style.food}>
      <h1 className={style.title}>{cap(title)}</h1>
      <ul className={style.ingredients}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
        <h3 className={style.calories}>Calories: {calories.toFixed()} kcals</h3>
        <img className={style.image} src={image} alt="" />
      </ul>
    </div>
  );
};

export default Recipe;
