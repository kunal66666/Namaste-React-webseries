import {useSelector} from 'react-redux';
import ItemList from './ItemList';
import {useDispatch}  from 'react-redux'
import { clearCart } from '../utils/cartSlice';
const Cart=()=>{

  
const cartItems= useSelector((store)=> store.cart.items);
  // how we read cart info
    // so agin we have to subcribe to cart so we have to use
    // use selector 
//   we directly have to subcribe like subcribte to items
// not subcribe to whole store 
// but it isless efficient so whole store get updated
// become we only have to item slice modifcation here
// so we need only item subscribe here not whole store
// never do this
// const store= useSelector((store)=> store);
// const cartItems= useSelector((store)=> store.cart.items);
  
    const dispatch=useDispatch();
    const handleCLearcart=()=>{
          dispatch(clearCart());
    }
  return <div className="text-center m-4 p-4">
    
    <h1 className="text-2xl font-bold">Cart</h1>
    <div className='w-6/12 m-auto'>
    <button className='p-2 m-2 bg-blue-500 text-black rounded-lg'
      onClick={
        handleCLearcart
      }
    >Clear cart</button>
    {cartItems.length===0 && (
        <h1>Card is empty! additems to the cart</h1>
    )}
        <ItemList items={cartItems} />
    </div>
    
    </div>
}

export default Cart;