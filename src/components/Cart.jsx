import image1 from "../assets/image1.avif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch,useSelector } from "react-redux";
import { removeFromFavorite } from "../feature/favoriteSlice";
import { increaseQty,decreaseQty } from "../feature/favoriteSlice";
export default function Cart({name,price,image,id,qty}){
    const dispatch = useDispatch();
    return(
        <div className="w-full h-30 p-2 shadow-lg flex justify-between">
            <div className="w-[60%] h-full flex gap-5">
                <div className="w-[60%] h-full overflow-hidden rounded-lg">
                    <img src={image} className="object-fit"/>
                </div>
                <div className="w-[50%] h-full flex flex-col gap-5">
                    <div className="text-gray-600 font-semibold whitespace-nowrap">{name}</div>
                    <div className="w-27 h-13 bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-bold border-2 border-green-400 text-xl">
                        <button 
                        className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-300 cursor-pointer"
                        onClick={()=> dispatch(decreaseQty(id))}
                        >-</button>
                        <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">{qty}</span>
                        <button 
                        className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-300 cursor-pointer"
                        onClick={()=>dispatch(increaseQty(id))}
                        >+</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-start items-end gap-8">
             <span className="text-xl text-green-400 font-bold">Rs {price}/-</span>
             <RiDeleteBin6Line 
             className="w-8 h-8 text-red-400 cursor-pointer"
             onClick={()=>dispatch(removeFromFavorite(id))}
             />
            </div>
        </div>
    )
}