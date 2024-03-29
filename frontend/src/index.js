import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PrivateRoutes from './components/PrivateRoutes';
import PaymentScreen from './screens/PaymentScreen';


import { Provider } from 'react-redux';
import store from './store';
import ShippingScreen from './screens/ShippingScreen';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
  <Route index={true} path='/' element={<HomeScreen/>}/>
  <Route path='/product/:id' element={<ProductScreen/>}/>
  <Route path='/cart' element={<CartScreen/>}/>
  <Route path='/login' element={<LoginScreen/>}/>
  <Route path='/register' element={<RegisterScreen/>}/>
  <Route path='' element={<PrivateRoutes/>}>
    <Route path='/shipping' element={<ShippingScreen/>}/>
    <Route path='/payment' element={<PaymentScreen/>}/>

  </Route>


  

  
   
  
  </Route>  
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);


