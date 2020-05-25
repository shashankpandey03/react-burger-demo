import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/buildcontrols/BuildControls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/orders/OrderSummary';

const ingredientsPrice = {
    salad: 0.2,
    meat: 1.3,
    bacon: 0.3,
    cheese: 0.4,
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 0,
        purchaseable: false,
        orderSummaryModalVisible: false
    }

    continueSummary = () => {
        alert('You continued !!!!');
    }

    toggleOrderSummaryModal = () => {
        this.setState({orderSummaryModalVisible: !this.state.orderSummaryModalVisible});
    }

    updatePurchaseState = (newIngredients) => {
        const sum = Object.keys(newIngredients).map(igKey => {
            return newIngredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState((prevState, props) => ({
            purchaseable: sum > 0
        }));
    }


    addIngredient = (ingredientName) => {
        let newIngredients = { ...this.state.ingredients };
        newIngredients[ingredientName] = newIngredients[ingredientName] + 1;
        let newPrice = this.state.totalPrice + ingredientsPrice[ingredientName];

        this.setState({ totalPrice: newPrice, ingredients: newIngredients });
        this.updatePurchaseState(newIngredients);
    }

    removeIngredient = (ingredientName) => {
        let newIngredients = { ...this.state.ingredients };
        if (newIngredients[ingredientName] > 0) {
            newIngredients[ingredientName] = newIngredients[ingredientName] - 1 < 0 ? 0 : newIngredients[ingredientName] - 1;
            let newPrice = this.state.totalPrice - ingredientsPrice[ingredientName];
            if (newPrice < 0) {
                newPrice = 0;
            }
            this.setState({ totalPrice: newPrice, ingredients: newIngredients });
            this.updatePurchaseState(newIngredients);
        }
    }

    render() {
        return (
            <Aux>
                { 
                    this.state.orderSummaryModalVisible && 
                        <Modal>
                            <OrderSummary ingredients={this.state.ingredients} 
                                toggleOrderSummaryModal={this.toggleOrderSummaryModal}
                                continueSummary={this.continueSummary}
                                totalPrice = {this.state.totalPrice} />
                        </Modal>
                }
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    totalPrice={this.state.totalPrice}
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    purchaseable={this.state.purchaseable} 
                    ingredients={this.state.ingredients}
                    toggleOrderSummaryModal={this.toggleOrderSummaryModal}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;