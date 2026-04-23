import Categories from "../Categories";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import food_items from "../food";
import { setData } from "../feature/dataSlice";
import { RxCross2 } from "react-icons/rx";
import { showCart } from "../feature/showCart";
import Cart from "../components/Cart";
import { toast } from "react-toastify";
export default function Home() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.data.list);
  const query = useSelector((state) => state.search.query);
  const cart = useSelector((state) => state.showCart.cart);
  const favorite = useSelector((state) => state.favorite.favorites);
  const subTotal = favorite.reduce((total, item) => total + item.qty * item.price,0);
  const isEmpty = favorite.length === 0;
  const deliveryFee = isEmpty ? 0 : 20;
  const taxes = isEmpty ? 0 : subTotal * 0.5 / 100;
  const total = isEmpty ? 0 : Math.floor(subTotal + deliveryFee + taxes);
  const filter = (category) => {
    if (category === "All") {
      dispatch(setData(food_items));
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      );
      dispatch(setData(newList));
    }
  };
  const filteredData = list.filter((item) =>
    item.food_name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Navbar />
      {!query && (
        <div className="flex flex-wrap justify-center items-center gap-3 w-full">
          {Categories.map((item) => (
            <div
              key={item.id}
              className="h-20 w-30 bg-white flex flex-col items-center gap-2 p-3 text-[15px] font-semibold text-gray-600 rounded-xl shadow-xl hover:bg-green-200 cursor-pointer transition-all"
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex flex-wrap gap-3 justify-center items-center pt-8 pb-8">
        {filteredData.length === 0 && query ? (
          <div className="w-full flex flex-col items-center justify-center gap-3 mt-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
              className="w-28 opacity-70"
            />
            <p className="text-xl text-gray-500 font-semibold">
              No Dish Found 😔
            </p>
            <p className="text-gray-400 text-sm">
              Try searching something else
            </p>
          </div>
        ) : (
          filteredData.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
              id={item.id}
            />
          ))
        )}
      </div>
      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all overflow-auto flex flex-col items-center duration-500 ${
          cart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center">
          <span className="text-green-400 text-xl font-bold">
            Order Items
          </span>
          <RxCross2
            className="text-green-400 w-7 h-7 cursor-pointer hover:text-gray-600"
            onClick={() => dispatch(showCart(false))}
          />
        </header>
        <div className="w-full mt-8 flex flex-col gap-5">
          {isEmpty ? (
            <div className="w-full flex flex-col items-center justify-center mt-10 gap-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                className="w-32 opacity-70"
              />
              <p className="text-xl text-gray-500 font-semibold">
                Your Cart is Empty 🛒
              </p>
              <p className="text-gray-400 text-sm">
                Add some delicious items 😋
              </p>
            </div>
          ) : (
            favorite.map((item) => (
              <Cart
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))
          )}
        </div>
        <div className="w-full border-t-2 border-b-2 border-gray-300 mt-7 flex flex-col gap-3 p-6">

          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">₹ {subTotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-semibold">₹ {deliveryFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Taxes</span>
            <span className="font-semibold">
              ₹ {taxes.toFixed(2)}
            </span>
          </div>

        </div>
        <div className="w-full flex justify-between items-center p-5 text-xl font-bold">
          <span>Total</span>
          <span className="text-green-500">₹ {total}</span>
        </div>
        <button
          disabled={isEmpty}
          onClick={()=>toast.success("Order Placed..")}
          className={`w-[90%] p-2 rounded-lg text-lg font-semibold transition-all 
          ${
            isEmpty
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-700 text-white hover:bg-green-600"
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}