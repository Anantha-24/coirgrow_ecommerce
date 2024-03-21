import React, { Fragment, useEffect, useState } from "react";
import "./Products.css" ;
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams, useNavigate, Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import  { Typography }  from "@material-ui/core";
import MetaData from "../layout/MetaData";


const categories = [
    "coir-pith",
    "coir-patch",
    "grow bag",
    "grow bag 1",
    "coir",
    "coir rope",
    "coir 2"
];

    const Products = ( { keyword } ) => {    
    const dispatch = useDispatch();
    const alert = useAlert();
  //const {keyword}  =useParams();
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 2000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0)

    const {
         products,
         loading, 
         error, 
         productsCount, 
         resultPerPage,
         filteredProductsCount,
    } = useSelector(
        (state) => state.products);

   //const keyword = match.params.keyword;    
   //const keyword = useParams().keyword;

    const setCurrentPageNo = (e)=>{
        setCurrentPage(e);
    };

    const priceHandler = (event, newPrice) => {
      setPrice(newPrice);
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            dispatch(getProduct(keyword, currentPage, price, category, ratings));
          } catch (error) {
            alert.error(error.response.data.message);
            dispatch(clearErrors());
          }
        };
      
        fetchData();
      }, [dispatch, keyword, currentPage, price, category, ratings, alert]);
      

    let count = filteredProductsCount;

    return(
    <Fragment>
        {loading? (
            <Loader /> 
            ) : (
        <Fragment>
        <MetaData title="PRODUCTS -- Coirgro"/>
   <h2 className="productsHeading">Products</h2>
   <div className="products">
    {products && 
    products.map((product) => (
        <ProductCard key={product._id} product={product} />   
    ))}
   </div>

    <div className="filterBox">
    <Typography>Price</Typography>
    <Slider
        value={price}
        onChange={priceHandler}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={2000}
    />

    <Typography>Categories</Typography>
           <ul className="categoryBox">
            {categories.map((category) => (
                <li
                className="category-link"
                key={category}
                onClick={() => setCategory(category)}
                > 
                {category}
                </li>
            ))}
           </ul>

    <fieldset>
        <Typography component="legend">Ratings Above</Typography>
        <Slider
            value={ratings}
            onChange={(e, newRating) => {
                setRatings(newRating);
            }}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="auto"
            min={0}
            max={5}
        />
    </fieldset>

   </div>


    {resultPerPage < count && (
    <div className="paginationBox">
    <Pagination
    activePage={currentPage}
    itemsCountPerPage={resultPerPage}
    totalItemsCount={productsCount}
    onChange={setCurrentPageNo}
    nextPageText="Next"
    prevPageText="Prev"
    firstPageText="1st"
    lastPageText="last"
    itemClass="page-item"
    linkClass="page-link"
    activeClass="pageItemActive"
    activeLinkClass="pageLinkActive"
    />
   </div>
    )}

    </Fragment>
        )}
    </Fragment>
    );
};

export default Products;