import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css"



const Footer = () => {
    return (
        <footer id="footer">
        <div className="LeftFooter"> 
        <h4> Download Our App</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src= {playstore} alt="playstore" />
        <img src= {appstore} alt="Appstore" />
        </div>

        <div className="midFooter"> 
        <h1>COIR GRO.</h1>
        <p>High Quantity is our first priority</p>
        <p>Copyrights 2021 &copy; Me CoirGro</p>
        </div>

        <div className="rightFooter"> 
        <h4>Follow Us</h4>
        <a href= "https://www.instagram.com/invites/contact/?i=s33lxwaicowt&utm_content=1xtmroi">Instagram</a>
        <a href= "https://youtube.com/@ananthakrishnan4377?si=snb35DKNwDOiCn2V">Youtube</a>
        <a href= "https://www.facebook.com/anantha.krishnan.184007?mibextid=ZbWKwL">Facebook</a>
        </div>
            
        </footer>

    );
};

export default Footer;