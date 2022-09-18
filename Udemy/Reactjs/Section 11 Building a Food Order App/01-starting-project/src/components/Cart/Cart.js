import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const carItems = (
    <ul className={classes["cart-items"]}>
      {[
        [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
          <il>{item.name}</il>
        )),
      ]}
    </ul>
  );
  return (
    //todo  Third child  so we add function on (click) to make close
    <Modal onClose={props.onClose}>
      {carItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        {/* here we get data from app file element cart */}
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
