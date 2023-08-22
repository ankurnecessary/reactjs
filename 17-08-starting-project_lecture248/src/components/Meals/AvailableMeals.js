import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

  const [dummyMeals, setDummyMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    (async () => {
      setIsLoading(true);

      try {

        // const response = await fetch('https://react-http-1b987-default-rtdb.firebaseio.com/meals');
        const response = await fetch('https://react-http-1b987-default-rtdb.firebaseio.com/meals.json');

        if (!response.ok) {
          throw new Error('Request failed.');
        }

        const mealsObj = await response.json();

        const mealsArr = [];

        for (const mealId in mealsObj) {
          const meal = {
            id: mealId,
            ...mealsObj[mealId]
          };
          mealsArr.push(meal);
        }

        setDummyMeals([...mealsArr]);

      }
      catch (error) {
        setError(error.message || 'Something went wrong.');
      }

      setIsLoading(false);

    })();

  }, [])

  if (error) {
    return (
      <section className={classes['meals-error']}>
        <p>{error}</p>
      </section>
    );
  }

  // WAY 1 - Start
  // This is first way of showing loading state of meals
  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  const mealsList = dummyMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  // WAY 1 - End

  // WAY 2 - Start
  // This is second way of showing loading state of meals
  /* const mealsList = !isLoading
    ? dummyMeals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ))
    : <p>Loading...</p>; 
  */
  // WAY 2 - End

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );

}
export default AvailableMeals;