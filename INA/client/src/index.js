// import 'materialize-css/dist/css/materialize.min.css'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import reduxThunk from 'redux-thunk'
import './dist/output.css'
import './dist/general.css'

import App from './components/App'
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 1st argument is collection of reducers, second arguments is initial state of our application and the third is applyMiddleWare
const store = createStore(reducers, {},composeEnhancers(applyMiddleware(reduxThunk)))

const e1 = document.getElementById('root');

const root = ReactDom.createRoot(e1);

console.log(process.env.REACT_APP_STRIPE_KEY)

root.render(<Provider store= {store}><App/></Provider>)