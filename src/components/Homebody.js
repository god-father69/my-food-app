import React from "react";
import Navbar from "./Navbar";
import "../css/Homebody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
function Homebody() {
  return (
    <div>
      <Navbar />
      <div className="hb-container1">
        <div className="hb-item hb-item1">
          <h2>Fresh Food</h2>
          <h4>Fresh food like home on your doors.</h4>
          <i class="fa-solid fa-pot-food"></i>
        </div>
        <div className="hb-item hb-item2">
          <h2>Fast Delivery</h2>
          <h4>We deliver within 20min which is fastest in the city</h4>
          <FontAwesomeIcon icon="fa-solid fa-moped" />
        </div>
        <div className="hb-item hb-item3">
          <h2>Reasonable Price</h2>
          <h4>We deliver a variety of food at a very reasonable price.</h4>
          <FontAwesomeIcon icon="fa-solid fa-hand-holding-dollar" />
        </div>
      </div>
      <div className="hb-container2">
        {/* <div className="cont2_left">
            
        </div> */}
        <div className="cont2_right">
          <div className="blur-pic"></div>
          <div className="cont2_content">
            <h1>Our Story</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis praesentium iusto dolorum quibusdam molestiae.</h4>
            <a href="/">Know More..</a>
          </div>
        </div>
      </div>
      <div className="footer">

      <Footer/>
      </div>
    </div>
  );
}

export default Homebody;
