import React, { Component } from 'react';
import classes from './ContactData.css';
import inputClasses from '../../../components/UI/Input/Input.css';
import axios from 'axios';
import Modal from '../../../components/UI/Modal/Modal';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {

    state = {
        name: '',
        email: '',        
        street: '',
        postalCode: '',
        deliveryMethod:'',
        loading: false,
    }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleOrder = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        
        this.setState({ loading: true});
        const data = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            name: this.state.name,
            email: this.state.email,        
            street: this.state.street,
            postalCode: this.state.postalCode,
            deliveryMethod:this.state.deliveryMethod
        };

        axios.post('https://react-my-burger-88d84.firebaseio.com/orders.json', data)
            .then(response => {
                this.setState({ loading: false});
                console.log(response);
                this.props.history.replace('/orders');
            }).catch(error => {
                this.setState({ loading: false});
                console.log(error);
                this.props.history.replace('/orders');
            });
    };

    purchaseCancelHandler = () => {
        this.setState({ loading: false});
    }

    render() {
        let spinner = null;
        if (this.state.loading) {
            spinner = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <Modal show={this.state.loading} modalClosed={this.purchaseCancelHandler}>
                    {spinner}
                </Modal>
                <h4><strong>Enter your contact data</strong></h4>
                <form>
                    <div className={inputClasses.SingleRow}>
                        <label className={inputClasses.Label}>Name : </label>
                        <input name="name" className={inputClasses.Input} type="text" onChange={this.onChangeHandler}/>
                    </div>
                    <div className={inputClasses.SingleRow}>
                        <label className={inputClasses.Label}>Email : </label>
                        <input name="email" className={inputClasses.Input} type="text" onChange={this.onChangeHandler}/>
                    </div>
                    <div className={inputClasses.SingleRow}>
                        <label className={inputClasses.Label}>Street : </label>
                        <input name="street" className={inputClasses.Input} type="text" onChange={this.onChangeHandler}/>
                    </div>
                    <div className={inputClasses.SingleRow}>
                        <label className={inputClasses.Label}>Postal Code : </label>
                        <input name="postalCode" className={inputClasses.Input} type="text" onChange={this.onChangeHandler}/>
                    </div>
                    <div className={inputClasses.SingleRow}>
                        <label className={inputClasses.Label}>Delivery Method : </label>
                        <select name="deliveryMethod" className={inputClasses.Input} onChange={this.onChangeHandler}>
                            <option key="fastest">Fastest</option>
                            <option key="cheapest">Cheapest</option>
                        </select>
                    </div>
                    <div style={{'marginBottom' :'10px'}}>
                        <button onClick={this.handleOrder}>ORDER</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactData;