import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../../hooks/use-http';
import { useCallback, useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [mealList, setMealList] = useState([]);

  const getMealList = useCallback((meals) => {

    const mealsArr = [];
    for (const mealId in meals) {
      const meal = {
        id: mealId
        , ...meals[mealId]
      }
      mealsArr.push(meal);
    }

    setMealList(mealsArr);

  }, []);

  const {
    isLoading
    , sendRequest: getMeals
    , hasError
  } = useHttp();

  useEffect(() => {
    getMeals({
      url: 'https://react-http-1b987-default-rtdb.firebaseio.com/meals.json'
    }, getMealList);
  }, [getMealList, getMeals])

  const mealsHTMLList = mealList.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (hasError) {
    return <p className={classes.error}>{hasError.error}</p>;
  }

  if (isLoading) {
    return <p className={classes.loading}>Loading...</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsHTMLList}
        </ul>
      </Card>
    </section>
  );
}
export default AvailableMeals;