import { FaRegCircleDot } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from "../utilis/cartSlice";
const MenuPageItems = ({ menuItem }) => {
  const {
    id,
    imageId,
    name,
    cuisines,
    avgRating,
    
    defaultPrice,
    sla,
    isVeg,
    ribbon,
    price,
    description,
  } = menuItem.card.info;


  function paisaToRupees(paisa) {
    console.log("Paise" ,paisa )
    return (paisa / 100).toFixed(2); 
  }
 
  const costForTwoInRupees = paisaToRupees(parseInt(defaultPrice ? defaultPrice:price, 10));
console.log("costForTwoInRupees " , costForTwoInRupees)
  const dispatch = useDispatch();
  const handleAddItem =(menuItem)=>{
    dispatch(addItem(menuItem))
  }

  console.log("menuItem info", menuItem);
  //   console.log("This ",  menuItem.data.cards.card.card.info);
  return (
    <>
      <div className="  flex my-10 justify-between items-center">
        <div>
          <div className="flex items-center">
            {isVeg === 1 ? (
              <FaRegCircleDot color={"green"} />
            ) : (
              <FaRegCircleDot color={"red"} />
            )}
            {ribbon.text === "Bestseller" ? (
              <div className="text-sm text-yellow-500 mx-2">Bestseller</div>
            ) : (
              <div></div>
            )}
          </div>

          <li key={id} className="my-2 list-none">{name}</li>
          <li  key={id} className="my-2 list-none text-[#3e4152]"> ₹{costForTwoInRupees}</li>
          <li key={id} className="my-2 list-none text-[rgba(40,44,63,.45)] text-sm">
            {description}
          </li>
        </div> 
<div>
<img
          className="w-full "
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
        />
        <button onClick={()=>handleAddItem(menuItem)} className="text-[#60b246]  px-4 py-2 border-[2px]  border-[#60b246]">Add</button>
</div>
        
      </div>
      <div className="border-b-[1px] h-0.5 border-[d3d3d3]"></div>
    </>
  );
};

export default MenuPageItems;
