import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useCartContext } from "../../store/cart-context";
import Link from "next/link";

// Interfaces
interface DataImages {
  large: string | string;
  medium: string;
  original: string;
  small: string;
  thumb: string;
}

interface Data {
  id: string;
  name: string;
  description_preview: string;
  description: string;
  images: DataImages;
  min_players: number;
  max_players: number;
  msrp_text: string;
  msrp: number;
  official_url: string;
  year_published: number;
  publisher: string;
  difficulty: number;
  age: number;
  min_playtime: number;
  max_playtime: number;
  amount: number;
}

function Cart() {
  const cartCtx = useCartContext();

  const { items, totalAmount } = cartCtx;

  const addItemToCartHandler = (item: Data) => {
    cartCtx.addItem(item);
  };

  const removeItemFromCartHandler = (id: string | number) => {
    cartCtx.removeItem(id);
  };

  const checkoutHandler = () => {
    cartCtx.checkout();
  };

  const total = `Total: $${totalAmount}`;

  let cartContents;
  if (!items.length) {
    return (
      <div className={classes.container}>
        <h1>My Cart</h1>
        <section className={classes.emptyList}>
          Your Cart is Empty!
          <br />
          Add some board games by searching in the{" "}
          <Link href="/products">Products</Link> page.
        </section>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <h1>My Cart</h1>
      <section className={classes.list}>
        {items.map((item: Data, i, list) => {
          // For the last element, omit the style line below item
          if (i + 1 === list.length) {
            return (
              <CartItem
                key={item.id}
                name={item.name}
                msrp_text={item.msrp_text}
                amount={item.amount}
                image={item.images.medium}
                isLast={true}
                onAdd={addItemToCartHandler.bind(null, item)}
                onRemove={removeItemFromCartHandler.bind(null, item.id)}
              />
            );
          }
          return (
            <CartItem
              key={item.id}
              name={item.name}
              msrp_text={item.msrp_text}
              amount={item.amount}
              image={item.images.medium}
              isLast={false}
              onAdd={addItemToCartHandler.bind(null, item)}
              onRemove={removeItemFromCartHandler.bind(null, item.id)}
            />
          );
        })}
      </section>

      <div className={classes.total}>{total}</div>

      <div className={classes.btnContainer}>
        <button onClick={checkoutHandler}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
