import React, { Component } from 'react';
import axios from 'axios';
import classes from '../../components/Order/Order.css';
import Order from '../../components/Order/Order';

class Orders extends Component {
    
    state = {
        orders: null
    }

    componentDidMount() {
        axios.get('https://react-my-burger-88d84.firebaseio.com/orders.json')        
            .then(response => {
                this.setState({ orders: response.data });
            }).catch(error => {
                alert('Error while fetching ingredients.' + error);
            });       
    }

    render() {
        let orders = [];
        if(this.state.orders != null) {
            let keys = Object.keys(this.state.orders)
            console.log(keys);
            for(let k of keys) {
                orders.push(<Order key={k} data={this.state.orders[k]} />);
            }
        } else {
            orders.push(<div style={{
                'height': '50%',
                'width': '100%',
                'border': '1px solid gray',
                'borderRadius': '5px',
                'margin': '10px auto',
                'marginBottom': '10px',
                'textAlign': 'center',
                'boxShadow': '4px 5px indianred',
                }}>No orders placed !!!</div>);
        }

        return(
            <div className={classes.Orders}>
               {orders} 
            </div>
        );
    }
}

export default Orders;