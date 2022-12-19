import React from 'react'
import "../css/Foodcard.css"
import food2 from "../assets/food2.jpg";
function FoodCard(props) {
  return (
    <div>
      <div className="card-container">
        <div className="cont-up">
            <img src={props.data.img} alt="" />
            {console.log(props.data)}
        </div>
        <div className="cont-down">
            <h2>{props.itemName}</h2>
            <p className="tag">{props.data.tag}</p>
            <p className="vegan">{props.data.vegan}</p>
            <h3>215Kal</h3>
            <h4>Price={props.data.price}</h4>
            <a href="/">Order</a>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
