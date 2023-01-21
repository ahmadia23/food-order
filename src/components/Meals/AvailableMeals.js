import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";
import { useState, useEffect} from "react";


const AvailableMeals = () => {

  const [getMeals, setGetMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
     async function getMealsHandler() {
      setIsLoading(true)
    try {
      const response = await fetch(
        "https://food-order-a9257-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log(data);

      const loadedMeals = []

      for(const meal in data){
        loadedMeals.push({
          id: meal,
          name: data[meal].name,
          description: data[meal].description,
          price: data[meal].price
        })
      }
      console.log(loadedMeals);
      setGetMeals(loadedMeals);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  getMealsHandler();

}, []);

  const mealsList = getMeals.map(meal => {
    return(<MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);
  })

  return (

    <section className={classes.meals}>
      <Card>
        <ul>
          {isLoading ? <p className="loading">Loading ....</p> : mealsList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;


// const [getMeals, setGetMeals] = useState();

//   useEffect(() => {
//     async function getMealsHandler() {
//     try {
//       const response = await fetch(
//         "https://food-order-a9257-default-rtdb.firebaseio.com/"
//       );
//       if (!response.ok) {
//         throw new Error("something went wrong");
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (err) {
//       console.log(err.message);
//     }
//   }}, []);
