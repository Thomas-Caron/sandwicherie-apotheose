//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { GET_CATEGORIES, saveCategories } from '../actions/categories';

//! == Utils Axios for recupered JSON via API
const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      axios.get('http://ec2-3-84-167-149.compute-1.amazonaws.com/api/api/categories')
        .then((response) => {
          store.dispatch(saveCategories(response.data));
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