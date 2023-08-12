import ReactDOM from 'react-dom/client';
//Router
import Router from './router/Router';
//Styles
import './styles/index.scss';
//Store
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router/>
  </Provider>
);