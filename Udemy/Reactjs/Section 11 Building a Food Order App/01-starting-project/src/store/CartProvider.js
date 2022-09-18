import { useReducer } from "react";
import CartContext from "./cart-context";

// here array
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// function return array
const cartReduce = (state, action) => {
  // make if condition on Reduce
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  // Here use Reduce 1- first [function ] 2- second [array]
  const [cartState, dispatchCartAction] = useReducer(
    cartReduce,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // Here you can use any name this 👇 is optional but second item is paramter
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items, //Here return function cartState select [items]
    totalAmount: cartState.totalAmount, // Here return function select [totalAmount]
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
