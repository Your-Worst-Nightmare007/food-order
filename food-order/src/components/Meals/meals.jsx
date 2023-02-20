import React, { Fragment } from 'react';
import AvailableMeals from './availableMeals';
import MealsSummary from './mealsSummary';

const Meals = props => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
}

export default Meals;