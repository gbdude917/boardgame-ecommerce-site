import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import classes from "./Header.module.css";
import BurgerMenuContents from "./BurgerMenuContents";

// Interface
interface WindowWidth {
  width: number | undefined;
}

function Header() {
  const [offset, setOffset] = useState(0);
  const [burgerDisplay, setBurgerDisplay] = useState<WindowWidth>({
    width: undefined,
  });
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Check when the user scrolls and display header conditionally
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Check the viewport width and render burger menu conditionally
  const updateMedia = () => {
    setBurgerDisplay({ width: window.innerWidth });
    setIsOpen(false); // Ensure that the burger is closed
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    updateMedia(); // Ensure that the updateMedia is called at least once to pre-render page properly
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const openBurgerHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const pathname = router.pathname;

  // Update style depending on scroll area
  let headerStyle;
  let burgerStyle;
  if (pathname === "/") {
    headerStyle =
      offset === 0 ? classes.headerTransparent : classes.headerWhite;

    burgerStyle =
      offset === 0 ? classes.burgerTransparent : classes.burgerBlack;
  } else {
    headerStyle = classes.headerWhite;
    burgerStyle = classes.burgerBlack;
  }

  // Update depending on size of screen
  let navContents;
  if (burgerDisplay.width) {
    navContents =
      burgerDisplay.width > 804 ? (
        <ul className={classes.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/cart">Cart 0</Link>
          </li>
        </ul>
      ) : (
        <span
          className={`${burgerStyle} ${classes.burger}`}
          onClick={openBurgerHandler}
        >
          <div />
          <div />
          <div />
        </span>
      );
  }

  return (
    <header className={`${classes.header} ${headerStyle}`}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <Link href="/">Gbdude's Board Games</Link>
        </div>
        {navContents}
        {isOpen && <BurgerMenuContents />}
      </nav>
    </header>
  );
}

export default Header;
