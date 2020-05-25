import React from 'react';
import styles from './Burger.module.css'
import BurgerIngredient from './burgeringredient/BurgerIngredient'

const burger = (props) => {

    const keys = Object.keys(props.ingredients);
    const transformedIngredients = keys.map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient type={igKey} key={igKey + i} />
        });
    })

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;