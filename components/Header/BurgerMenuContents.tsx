import ReactDOM from "react-dom";
import Link from "next/link";

import classes from "./BurgerMenuContents.module.css";

// Third Party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// Interface
interface BurgerMenuContents {
  isOpen: boolean;
  setIsOpen: Function;
}

function BurgerMenuContents(props: BurgerMenuContents) {
  const closeHandler = () => {
    props.setIsOpen(false);
  };

  return ReactDOM.createPortal(
    <div className={classes.container}>
      <button onClick={closeHandler} className={classes.btn}>
        <FontAwesomeIcon icon={faXmark} className={classes.icon} />
      </button>
      {/* <input type="checkbox" className={classes.btnControl} /> */}
      <div className={classes.contents}>
        <div className={classes.links}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/">About</Link>
          <Link href="/cart">Cart 0</Link>
        </div>
      </div>
      ,
    </div>,

    document.getElementById("burger-content")!
  );
}

export default BurgerMenuContents;
