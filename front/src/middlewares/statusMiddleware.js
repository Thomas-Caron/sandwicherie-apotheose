//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_STATUS, saveStatus } from '../actions/status';

//! == Utils Axios for recupered JSON via API
const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_STATUS:
      axios.get('http://ec2-3-84-167-149.compute-1.amazonaws.com/api/api/store/1')
        .then((response) => {
          store.dispatch(saveStatus(response.data.status));
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

export default categoriesMiddleware;