import React from "react";
import './styles.scss';

const Button = (props) => {
   const { btnText, evt } = props;
   return (
      <button onClick={() => evt()} className="button">
         {btnText}
      </button>
   );
}
export default Button