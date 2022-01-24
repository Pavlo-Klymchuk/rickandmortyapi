import React from "react";
import './styles.scss';
import { Link } from "react-router-dom";

const Card = (props) => {
   const { cardImg, name, status, id } = props;

   return (
      <div className="card">
         <img src={cardImg} alt="" className="card-img" />
         <div className="card-content">
            <h2 className="card-header">{name}</h2>
            <p className="card-status">{status}</p>
         </div>
         <Link className="card-button" to={`/character/:${id}`}>
            <span>Info</span>
         </Link>
      </div>
   );
}

export default Card