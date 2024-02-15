import React, { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) { // Use the correct prop name

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....` ;

  const readmoreHandler = () => {
    setReadmore(!readmore);
  };

  return (
    <div className="card">
      <img src={image} alt="City-img" className="image" />

      <div className="tour-info">
 			  <div className="tour-details">
 				  <h4 className="tour-price">{price}</h4>
 				  <h4 className="tour-name">{name}</h4>
 			  </div>

 			  <div className="decription">
 				  {description}
          <span className="readMore" onClick={readmoreHandler}>
 					  {readmore ? `Show Less` : `Read More`}
 				  </span>
 			  </div>

 			</div>


      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>

      {/* <button className="btn-green" > Interested </button>  */}

    </div>
  );
}

export default Card;
