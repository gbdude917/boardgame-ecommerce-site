import { useRef } from "react";
import classes from "./SearchBar.module.css";

interface Props {
  onSearch: Function;
}

function SearchBar(props: Props) {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <section className={classes.container}>
      <form
        className={classes.form}
        onSubmit={(e) => props.onSearch(e, searchRef.current)}
      >
        <label htmlFor="search-bar">Search for Product</label>
        <input
          id="search-bar"
          type="text"
          placeholder="Type Game Name Here"
          ref={searchRef}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default SearchBar;
