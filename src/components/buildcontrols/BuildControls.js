import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './buildcontrol/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p> Current Price : <strong> {props.totalPrice.toFixed(2)} </strong> </p>
        {
            controls.map( ctrl => (
                <BuildControl 
                    label={ctrl.label} 
                    key={ctrl.type}
                    addIngredient={() => {props.addIngredient(ctrl.type)} }
                    removeIngredient={() => {props.removeIngredient(ctrl.type) }}
                />
            ))            
        }
        <button className={styles.OrderButton} 
            disabled={!props.purchaseable} 
            onClick={props.toggleOrderSummaryModal}>
            ORDER NOW
        </button>        
    </div>   
);

export default buildControls;