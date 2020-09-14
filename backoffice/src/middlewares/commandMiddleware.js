//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_COMMAND, CHANGE_STATUS, saveCommand, changeStatus } from '../actions/command';

//! == Utils Axios for recupered JSON via API
const commandMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMAND:
      axios.get('http://ec2-3-84-167-149.compute-1.amazonaws.com/api/api/order')
        .then((response) => {
          store.dispatch(saveCommand(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
      case CHANGE_STATUS:
        const state = store.getState();
        const { idCommand } = state.command;
        axios.put(`http://ec2-3-84-167-149.compute-1.amazonaws.com/api/api/order/${idCommand}`, {
          status: 2,
        })
          .then((response) => {
            console.log(response, "response");
          })
          .catch((error) => {
            console.log(error);
          });
        break;
    default:
      next(action);
      break;
  }
};

export default commandMiddleware;