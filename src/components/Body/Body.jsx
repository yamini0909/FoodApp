import React, { useEffect, useState } from "react";
import ResList from "../../App";
import ResCard from "../ResCard/ResCard";
import "./Body.css";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [newFilteredRestaurants, SetNewFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setResData(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      SetNewFilteredRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = resData.filter((res) => res.info.avgRating >= 4);
    SetNewFilteredRestaurants(filteredList);
    setFilterValue("top-rated");
  };
  const filterVegRestaurants = () => {
    const vegList = resData.filter((res) => res.info.veg === true);
    SetNewFilteredRestaurants(vegList);
    setFilterValue("veg-only");
  };
  const filterCostRestaurants = () => {
    const maxCost = 400; // Maximum cost for two
    const costList = resData.filter((res) => {
      const cost = parseFloat(res.info.costForTwo.replace(/[^0-9.]/g, ""));

      return !isNaN(cost) && cost < maxCost;
    });
    SetNewFilteredRestaurants(costList);
    setFilterValue("cost");
  };
  const filterByDeliveryTime = () => {
    const filteredList = resData.filter(
      (res) => res.info.sla.deliveryTime <= 25
    );
    SetNewFilteredRestaurants(filteredList);
    setFilterValue("delivery");
  };

  if(resData?.length === 0){
    return <Shimmer/>
  }
  return (
    <>
      <div className="search">
        <div className="search-cnt">
          <input
            className="search-bar outline-none  focus:border-[#fc8019]"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setFilterValue("");
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              SetNewFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="filter-cnt flex justify-center items-center my-10">
        <button
          className={`filter-btn text-custom mx-5 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
            filterValue === "top-rated" ? "bg-[black] text-white" : ""
          }`}
          onClick={filterTopRatedRestaurants}
        >
          Top rated Restaurants
        </button>
        <button
          className={`filter-btn text-custom mx-5 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
            filterValue === "veg-only" ? "bg-[black] text-white" : ""
          }`}
          onClick={filterVegRestaurants}
        >
          Pure Veg Restaurants
        </button>
        <button
          className={`filter-btn text-custom mx-5 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
            filterValue === "delivery" ? "bg-[black] text-white" : ""
          }`}
          onClick={filterByDeliveryTime}
        >
          Delivery Time
        </button>
        <button
          className={`filter-btn text-custom mx-5 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ${
            filterValue === "cost" ? "bg-[black] text-white" : ""
          }`}
          onClick={filterCostRestaurants}
        >
          Less than 400
        </button>
      </div>

      <div className="res-container">
        {newFilteredRestaurants?.map((res, index) => (
          <Link
            className="link-styling"
            to={"/menu/" + res.info.id}
            key={res.info.id}
          >
            <ResCard data={res} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
