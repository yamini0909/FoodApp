import React from "react";
import "./ResCard.css";

const ResCard = ({ data }) => {
  // Check if resData is defined and has the 'data' property
  if (!data || !data.info) {
    return null; // Render nothing if resData is undefined or does not have 'data'
  }
  console.log(data);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = data.info;


  return (
    <div className="cards ease-[cubic-bezier(0.95,0.05,0.795,0.035)]" style={{ textDecoration: "none" }}>
      <img
        className="img-width"
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="food"
      />
      <div className="py-2.5 px-2.5">
      <h3 className="link-styling">{name}</h3>
      <h4 className="grey-color link-styling">{cuisines?.join(", ")}</h4>
      <div className="flex cardBox-rating-cost">
      {(avgRating >= 4) ? <h4 className="green rounded">{avgRating}</h4> : <h4 className="orange rounded">{avgRating}</h4>}


        <div className="dot">.</div>
        <h4 className="link-styling small-font">{sla.deliveryTime} mins</h4>

        <div className="dot">.</div>
        <h4 className="link-styling small-font">{costForTwo}</h4>
      </div>
      </div>
     
    </div>
  );
};

export default ResCard;
