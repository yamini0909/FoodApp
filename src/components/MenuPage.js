import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import {BsFillStarFill} from 'react-icons/bs'
import {BsClockFill , BsCurrencyRupee} from 'react-icons/bs'
import { HiCurrencyRupee } from "react-icons/hi";
import { LuVegan } from "react-icons/lu";
import MenuPageItems from "./MenuPageItems";
const Menupage = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6029419&lng=77.332877&restaurantId=${resId}`
        
      );
      console.log("This is response ", response)
      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }
      const json = await response.json();
      
      setResInfo(json.data);
    } catch (error) {
      console.error(error);
    }
    console.log("This is resID", resId)
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines = [], city, avgRating, totalRatingsString, costForTwoMessage ,sla,cloudinaryImageId} =
    resInfo?.cards?.[0]?.card?.card?.info ?? {};

  const { itemCards } = resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card ?? {};

  console.log("ItemCard", itemCards);

  return (
    <div className="flex flex-col items-center my-10 max-w-7xl mx-auto" >
      <div className="flex mx-20 gap-10 justify-between w-full px-80 border-b-[3px] py-2 border-dotted">
        <div className="mr-10">
          <h1 className="text-2xl font-bold mb-0">
            {name}
          </h1>
          <h4 className="text-sm text-[#7e808c] mb-1">
            {cuisines.join(", ")}
          </h4>
          <div className="text-sm text-[#7e808c]">
            {city}
          </div>
        </div>
        <div className="border-[#e9e9eb] border-2 shadow-[ #f9f9f9] shadow-sm rounded-md p-2 flex flex-col items-center font-bold">
       
          
          {(avgRating >= 4) ? <h4 className="green rounded text-xs flex">  <BsFillStarFill className="" color={`(avgRating >= 4) ? text-green : text-orange`}/>{avgRating}</h4> : <h4 className="orange text-xs rounded flex">{avgRating}</h4>}
        
          <div className="text-xs mt-2 text-[#8b8d97]">
            {totalRatingsString}
          </div>
        </div>
      </div>

      <div className="flex m-5 items-start w-full px-80 border-b-[3px] py-2 border-dotted">
        <div className="mr-10 flex items-center font-extrabold">
        <BsClockFill className="mr-2" size={22}/>  {sla?.deliveryTime}mins
        </div>
       
        <div className="mr-10 flex items-center font-extrabold">
       <HiCurrencyRupee className="mr-2" size={28}/>{costForTwoMessage}
        </div>
        <div className="mr-10 flex items-center font-extrabold">
       <LuVegan className="mr-2" size={22} color={"#008000"}/>{}
        </div>
      </div>
      <div className="mt-10 max-w-7xl mx-auto px-80">
        {/* <div className="">Menu</div> */}
        {itemCards &&
  itemCards.map((item) => (
  
    
      <MenuPageItems menuItem={item} />
 
    
  ))}

      </div>
    </div>
  );
};

export default Menupage;
