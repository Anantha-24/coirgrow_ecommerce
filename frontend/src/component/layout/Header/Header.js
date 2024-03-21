import React from "react";
import { ReactNavbar } from "overlay-navbar";
import {MdAccountCircle, MdSearch, MdAddShoppingCart } from "react-icons/md";
import logo from "../../../images/logo.png";

const options={
  burgerColor:"#eb4034",
  burgerColorHover:"#a62d24",
  logo,
  logoWidth:"20vmax",
  navColor1:"white",
  logoHoverSize:"10px",
  logoHoverColor:"red",
  link1Text:"Home",
  link2Text:"Products",
  link3Text:"Contact",
  link4Text:"About",
  link1Url:"/",
  link2Url:"/Products",
  link3Url:"/Contact",
  link4Url:"/About",
  link1Size:"1.3vmax",
  link1Color:"rgba(35, 35, 35, 0.8)",
  nav1justifyContent:"flex-end",
  nav2justifyContent:"flex-end",
  nav3justifyContent:"flex-start",
  nav4justifyContent:"flex-start",
  link1ColorHover:"#eb4034",
  link1Margin:"1vmax",
  profileIconUrl:"/login",
  profileIconColor:"rgba(35, 35, 35,0.8)",
  searchIconColor:"rgba(35, 35, 35,0.8)",
  cartIconColor:"rgba(35, 35, 35,0.8)",
  profileIconColorHover:"#eb4034",
  searchIconColorHover:"#eb4034",
  cartIconColorHover:"#eb4034",
  cartIconMargin:"1vmax",
}
const Header = () => {
  return (
    <ReactNavbar
      {...options}
      profileIcon={true}
      ProfileIconElement={MdAccountCircle}
      searchIcon={true}
      SearchIconElement={MdSearch}
      cartIcon={true}
      CartIconElement={MdAddShoppingCart}
    />
  );
};


export default Header;