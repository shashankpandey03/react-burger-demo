import React from 'react';
import Aux from '../../hoc/Aux';

const orderSummary = (props) => {
    const ingredients = props.ingredients;

    return (
        <Aux>
            <h3>Your Order Summary</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
            {
                Object.keys(ingredients).map((igKey) => {
                    return <li key={igKey} >{igKey.toLocaleUpperCase() + ' : ' + ingredients[igKey]}</li>;
                })      
            }
            </ul>
            <p><strong>Total Price : {props.totalPrice.toFixed(2)}</strong> </p>
            <p>Want to checkout ? </p>
            <button style={{color:'white',backgroundColor: 'red',margin: '5px'}} 
                onClick={props.toggleOrderSummaryModal}>CANCEL</button>
            <button style={{color:'white',backgroundColor: 'green',margin: '5px'}}
                onClick={props.continueSummary}>CONTINUE</button>
        </Aux>
    );
};

export default orderSummary;