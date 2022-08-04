import classes from "./CartItem.module.css";

// Interfaces
interface Props {
  name: string;
  msrp_text: string;
  amount: number;
  image: string;
  isLast: boolean;
  onAdd: React.MouseEventHandler<HTMLButtonElement>;
  onRemove: React.MouseEventHandler<HTMLButtonElement>;
}

function CartItem(props: Props) {
  const style = props.isLast
    ? `${classes.containerIsLast}`
    : `${classes.container}`;

  let msrp = props.msrp_text;
  if (msrp === "" || !msrp) {
    msrp = "$- - . - -";
  }

  return (
    <div className={style}>
      <div>
        <img className={classes.img} src={props.image} alt={props.name} />
      </div>

      <div className={classes.name}>
        <h1>{props.name}</h1>
      </div>

      <div>
        <div className={classes.qtyAmount}>Quantity: {props.amount}</div>

        <div className={classes.buttons}>
          <button onClick={props.onAdd}>+</button>
          <button onClick={props.onRemove}>-</button>
        </div>
      </div>

      <div className={classes.msrp}>
        <h1>{msrp}</h1>
      </div>
    </div>
  );
}

export default CartItem;
