import "./App.css";
import { useEffect , useState } from "react";
import Header from "./component/layout/Header/Header";
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails  from "./component/Product/ProductDetails";
import Products from "./component/Product/Products"
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store"
import { loadUser } from "./actions/userAction";
import UserOptions from  "./component/layout/Header/UserOptions"
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
//import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping"
import ConfirmOrder from "./component/Cart/ConfirmOrder.js"
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders  from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails"
import Dashboard from "./component/admin/Dashboard";
import ProductList from "./component/admin/ProductList";
import NewProduct from "./component/admin/NewProduct";
import UpdateProduct from "./component/admin/UpdateProduct";
import OrderList from "./component/admin/OrderList";
import ProcessOrder from "./component/admin/ProcessOrder";
import UsersList from "./component/admin/UsersList"
import UpdateUser from "./component/admin/UpdateUser.js";
import ProductReviews from "./component/admin/ProductReviews.js";

function App() {

  const { isAuthenticated, user } = useSelector((state)=>state.user)
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
   
    try { 
      const response  = await axios.get("/api/v1/stripeapikey");
      console.log("Stripe API Key Response:", response);
      setStripeApiKey(response.data.stripeApiKey);
    } catch (error) {
      console.error("Error fetching Stripe API key:", error.message);
    }
    };
  

  React.useEffect(()=> {
    WebFont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
    
    },[]);

  return( 
    <Router>
     <Header />
     {isAuthenticated && <UserOptions user={user} />}
      
    <Routes>
  
     <Route exact path="/" element={<Home/>}/> 
     <Route exact path="/product/:id" element={<ProductDetails/>} />
     <Route exact path="/products" element={<Products/>} />
     <Route path="/products/:keyword" element={<Products/>} />
     <Route exact path="/search" element={<Search/>} />
    
    
     <Route exact path="/account" element={<Profile/>} />
     <Route exact path="/me/update" element={<UpdateProfile/>} />
     <Route exact path="/password/update" element={<UpdatePassword/>} />
     <Route exact path="/shipping" element={<Shipping/>} />
     <Route exact path="/process/payment" element={<Elements stripe={loadStripe(stripeApiKey)}><Payment/></Elements>} />
     <Route exact path="/success" element={<OrderSuccess/>} />
     <Route exact path="/orders" element={<MyOrders/>} />
     <Route exact path="/order/confirm" element={<ConfirmOrder/>} />
     <Route exact path="/order/:id" element={<OrderDetails/>} />
     <Route isAdmin={true} exact path="/admin/dashboard" element={<Dashboard/>} />
     <Route exact path="/admin/products" isAdmin={true} element={<ProductList/>} />
     <Route exact path="/admin/product" isAdmin={true} element={<NewProduct/>} />
     <Route exact path="/admin/product/:id" isAdmin={true} element={<UpdateProduct/>} />
     <Route exact path="/admin/orders" isAdmin={true} element={<OrderList/>} />
     <Route exact path="/admin/order/:id" isAdmin={true} element={<ProcessOrder/>} />
     <Route exact path="/admin/users" isAdmin={true} element={<UsersList/>} />
     <Route exact path="/admin/user/:id" isAdmin={true} element={<UpdateUser/>} />
     <Route exact path="/admin/reviews" isAdmin={true} element={<ProductReviews/>} />


     <Route exact path="/password/forgot" element={<ForgotPassword/>} />
     <Route exact path="/password/reset/:token" element={<ResetPassword/>} />
     <Route exact path="/login" element={<LoginSignUp/>} />
     <Route exact path="/cart" element={<Cart/>} />
     
     </Routes>
    
     <Footer/>
     </Router>  
  
  ); 
}

export default App;