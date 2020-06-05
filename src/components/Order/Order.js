import React from 'react';
import classes from './Order.css';

const order = (props) => {

    return (
        <div className={classes.Order}>
            <p><strong><u>Ingredients</u></strong></p>        
            {Object.keys(props.data.ingredients).map(data => (
                <span key={data} style={{margin:'5px'}} >{data.toLocaleUpperCase()  + ' : ' + props.data.ingredients[data]}</span>
            ))}
            <p><strong><u>Total Price</u> :  {props.data.price}</strong></p>
        </div>    
    )
};

export default order;