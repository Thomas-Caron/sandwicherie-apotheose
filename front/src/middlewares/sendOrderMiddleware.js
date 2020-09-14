import axios from 'axios';
import { SEND_ORDER, saveUser } from '../actions/order';
import { returnTotalPrice } from '../selectors/index';

const sendOrderMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_ORDER: {
            const state = store.getState();

            // Destructuring the state to get what is needed in the request
            const { status, cart, listPrice } = state.command;

            const  { values } = state.form.ValidationForm;

            const comment = values.comment;

            const user = values;

            // Use the map function on Cart to return a new const that contain the right structure expected from the back-end
            const orderLines = cart.map((productMap) => {
                return {
                    quantity: productMap.quantity,
                    product: {
                        id: productMap.id
                    }
                }
            });

            // Use a function (selector) that return the total price of every prices placed in listPrice
            const totalPrice = returnTotalPrice(listPrice).totalPrice.toFixed(2);

            // Convert totalPrice to integer
            const price = parseInt(totalPrice);

            axios.post('http://ec2-3-84-167-149.compute-1.amazonaws.com/api/api/order', {
                comment,
                price,
                orderLines,
                status,
                user,
            }).then((response) => {
                store.dispatch(saveUser(values));
            }).then((error) => {
                console.log(error)
            });
            next(action);
            break;
        }
        
        default:
            next(action);
    }
}

export default sendOrderMiddleware;