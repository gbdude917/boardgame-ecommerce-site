import ReactDOM from "react-dom";
import Link from "next/link";

import classes from "./BurgerMenuContents.module.css";

// Third Party
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
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
    <Fragment>
      <div className={classes.backdrop} onClick={closeHandler} />
      <div className={classes.container}>
        <button onClick={closeHandler} className={classes.btn}>
          <FontAwesomeIcon icon={faXmark} className={classes.icon} />
        </button>
        {/* <input type="checkbox" className={classes.btnControl} /> */}
        <div className={classes.contents}>
          <div className={classes.links}>
            <Link href="/">
              <span onClick={closeHandler}>Home</span>
            </Link>
            <Link href="/products">
              <span onClick={closeHandler}>Products</span>
            </Link>
            <Link href="/">
              <span onClick={closeHandler}>About</span>
            </Link>
            <Link href="/cart">
              <span onClick={closeHandler}>Cart 0</span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>,

    document.getElementById("burger-content")!
  );
}

export default BurgerMenuContents;
