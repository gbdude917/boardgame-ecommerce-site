import classes from "./BurgerMenu.module.css";

// Interfaces
interface BurgerMenu {
  burgerHandler: Function;
}

function BurgerMenu(props: BurgerMenu) {
  const { burgerHandler } = props;

  return (
    <span className={classes.burger} onClick={() => burgerHandler()}>
      <div />
      <div />
      <div />
    </span>
  );
}

export default BurgerMenu;
