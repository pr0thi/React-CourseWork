import {useSelector} from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import ItemList from "./ItemList";
import {useDispatch} from "react-redux";

const Cart = () =>{

    //how to read cart items 

    //Subscribe to the store 

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();

    //const cartItems = (store.cart.items);//this will work but cause performance issue
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    //Build a remove item feature -> Self Practice 



    const handleRemoveItem = () =>{
        dispatch(removeItem());

    }


    console.log(cartItems);

    let x = 1; 

    return (<div className="text-center m-10 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">

    {cartItems.length==0 && <h1>Cart is empty, add items to cart! </h1>}
    {cartItems.length==x && <h1>Item {x}</h1>}
            <ItemList items={cartItems}/>

            <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
            
            >Clear Cart</button>
            <button className="p-2 m-2 bg-gray-400 text-black rounded-md"
            onClick={handleRemoveItem}>Remove Item</button>

        </div>
        
        </div>
    )


};

export default Cart;