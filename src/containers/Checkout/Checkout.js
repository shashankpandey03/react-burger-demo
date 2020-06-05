import React, { Component } from 'react';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0,
        },
        totalPrice: 0
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of queryParams.entries()) {
            if (param[0] !== 'price')
                ingredients[param[0]] = parseInt(param[1]);
            else
                this.setState({ totalPrice: parseFloat(param[1]) });
        }

        this.setState({ ingredients: ingredients });
    }

    cancelHandler = (props) => {
        this.props.history.goBack();
    }

    continueHandler = (props) => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    cancel={this.cancelHandler}
                    continue={this.continueHandler} />
                <Route path={this.props.match.path + '/contact-data'}
                    render={() => (
                        <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice}/>
                    )} />
            </div>
        )
    }
}

export default Checkout;