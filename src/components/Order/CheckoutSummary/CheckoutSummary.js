import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>Hope you enjoy it !!!</h1>
            <div style={{height:'100%',width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div>
                <button className={classes.DANGER} onClick={props.cancel}>CANCEL</button>
                <button className={classes.SUCCESS} onClick={props.continue}>CONTINUE</button>
            </div>
        </div>
    )
};

export default checkoutSummary;