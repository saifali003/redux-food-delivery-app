import image1 from "../assets/image1.avif";
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../feature/favoriteSlice";
import { toast } from "react-toastify";
export default function Card({name,image,id,price,type,qty}){
    const dispatch = useDispatch();
    return(
        <div className="w-75 h-80 bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg mb-3 hover:border-2 border-green-400">
            <div className="w-full h-[60%] overflow-hidden rounded-lg">
                <img src={image} className="object-fit h-50 w-70"/>
            </div>
            <div className="text-xl font-semibold">
               {name}
            </div>
            <div className="w-full flex justify-between items-center">
               <div className="text-lg font-bold text-green-500">Rs.{price}/-</div>
                <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold" >
                    {type==="veg"? <LuLeafyGreen />: <GiChickenOven />}
                    <span>{type}</span>
                </div>
            </div>
            <button 
            className="w-full bg-green-700 p-1 rounded-lg text-gray-300 hover:bg-green-600 hover:text-gray-700 transition-all cursor-pointer"
            onClick={()=>{dispatch(addToFavorite({name:name,image:image,id:id,price:price,type:type,qty:1})); toast.success("item added")}}
            >Add To Dish</button>
        </div>
    )
}