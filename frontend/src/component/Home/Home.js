import React, { Fragment, useEffect } from 'react';
import {CgMouse} from 'react-icons/cg';
import './Home.css';
import ProductCard from "./ProductCard.js";
import MetaData from '../layout/MetaData.js';
import { useSelector, useDispatch} from "react-redux"
import {getProduct, clearErrors } from "../../actions/productAction.js";
//import { getProduct } from "../../actions/getProduct.js";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from "react-alert";


 const Home = () => {
 const alert = useAlert();
 const dispatch = useDispatch();
 const {loading, error, products, productsCount} = useSelector(
  (state) => state.products
    );
      

    useEffect(() =>{
      if(error) {
        alert.error(error);
        dispatch(clearErrors());
      }
         
      dispatch(getProduct());
    },[dispatch, error, alert] );
  

  return ( 
    <Fragment>

      {loading ? (
        <Loader />
     ): (
  <Fragment>
  <MetaData title="CoirGro"/>

  <div className="banner">
    <p>Welcome to Coirgro</p>
    <h1>Find coir made products below</h1>

    <a href="#container">
    <button>
        Scroll <CgMouse />
    </button>
    </a>
  </div>


  <h2 className="homeHeading">Featured Products</h2>

  <div className="container" id="container" >
    {products && 
    products.map((product) =>(
     <ProductCard key={product._id} product={product} />
     ))}

  </div>
   </Fragment>
   )}
    </Fragment>
  );
};

export default Home;
