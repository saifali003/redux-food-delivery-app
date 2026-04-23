import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch,useSelector } from "react-redux";
import { setSearch } from "../feature/searchSlice";
import { showCart } from "../feature/showCart";
export default function Navbar(){
  const dispatch = useDispatch();
  const query = useSelector((state)=>state.search.query);
  const cart = useSelector((state)=> state.showCart.cart);
  const favorite = useSelector((state)=> state.favorite.favorites);
  console.log(favorite);
    return(
        <div className="w-full h-25 flex justify-between items-center px-8 md:px-8">
             <div className="w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-xl">
               <MdFastfood  className="w-8 h-8 text-green-500"/>
             </div>
             <form 
             className="flex w-[40%] h-14 bg-white items-center px-4 gap-5 rounded-md shadow-md md:w-[70%] lg:w-[70%]"
             onSubmit={(e)=> e.preventDefault()}
             >
                <IoSearch  className="text-green-500 w-6 h-6"/>
                <input
                type="text"
                placeholder="Search Items..."
                className="w-full outline-none text-[16px] md:text-[20px]"
                value={query}
                onChange={(e)=> dispatch(setSearch(e.target.value))}
                />
             </form>
             <div 
             className="w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer"
             onClick={()=>dispatch(showCart(true))}>
                <span className="absolute top-0 right-2 text-green-500 font-bold text-xl">{favorite.length}</span>
               <FiShoppingBag className="w-8 h-8 text-green-500"/>
             </div>
        </div>
    );
}