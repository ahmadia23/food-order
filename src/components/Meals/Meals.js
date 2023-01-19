import AvailableMeals from "./AvailableMeals";
import MealsSummary from "../UI/MealsSummary";
import { Fragment } from "react";


const Meals = () => {
  return (
    <Fragment>
      <MealsSummary/>
      <AvailableMeals/>
    </Fragment>
  )
}

export default Meals;
