import React, { useState } from "react";
import FoodCard from "./FoodCard";
import Navbar from "./Navbar";
import axios from "axios";
import "../css/Menu.css";
import Footer from "./Footer";
function Menu() {
  const [userdata, setData] = useState("");
  // const [userimage,setimage]=useState("https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg")
  const getData = async (i) => {
    try {
      const res = await axios.get(
        "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=9YVWWeUOpQjN71wLW_gG9ckqkZ0PlSSk"
      );
      if (!res) {
        throw Error;
      }
      setData(res.data[i].items);
      console.log(userdata);
      // setimage(res.data.data.avatar)
    } catch (Error) {
      alert(Error);
      console.log("hii");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container-menu">
        <button onClick={() => getData("0")}>Breakfast</button>
        <button onClick={() => getData("1")}>Lunch</button>
        <button onClick={() => getData("2")}>Snacks</button>
        <button onClick={() => getData("3")}>Dinner</button>
        <button onClick={() => getData("6")}>Desert</button>
        <button onClick={() => getData("4")}>Burgers and Beverages</button>

        {userdata.length > 0 ? (
          userdata.map((item) => {
            return <FoodCard data={item} />;
            // console.log("hii");
          })
        ) : (
          <p colSpan="5">Loading...</p>
        )}

        {/* <FoodCard/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default Menu;
