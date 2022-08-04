import { useState, useEffect } from "react";

import classes from "./ProductPage.module.css";
import SearchBar from "../Search/SearchBar";
import ProductSection from "./ProductSection";
import { getAllData } from "../../lib/get-data";

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
  amount: number;
}

interface Props {
  productList: Data[];
}

const gamesPerLoad = 8;
let boardGameContainer: Data[] = [];
let count = 1; // Avoid second render causing duplicates (because of React.StrictMode)

function ProductPage(props: Props) {
  const [productList, setProductList] = useState<Data[]>(props.productList);
  const [invalidName, setInvalidName] = useState(false);
  const [gamesToShow, setGamesToShow] = useState<Data[]>([]);
  const [next, setNext] = useState(8);

  // Ensure that productList gets data when props.productList updates
  useEffect(() => {
    setProductList(props.productList);
  }, [props.productList]);

  // Load when rerender checks complete
  useEffect(() => {
    if (count == 4) {
      loopWithSlice(0, gamesPerLoad);
    } else {
      count++;
    }
  }, [count]);

  const loopWithSlice = (start: number, end: number) => {
    const slicedGames = productList.slice(start, end);
    boardGameContainer = [...boardGameContainer, ...slicedGames];
    setGamesToShow(boardGameContainer);
  };

  const showMorePostsHandler = () => {
    loopWithSlice(next, next + gamesPerLoad);
    setNext(next + gamesPerLoad);
  };

  const updateGamesToShow = (list: Data[]) => {
    const newGamesToShow = list.slice(0, next); // Ensure that all displayed products get replaced
    setGamesToShow(newGamesToShow);
  };

  async function searchHandler(e: React.FormEvent, ref: HTMLInputElement) {
    e.preventDefault();

    const name = ref.value;

    // Error handling
    if (name === undefined || name.trim() === "" || name === null) {
      setInvalidName(true);
      return;
    }

    const updateList = async () => {
      const list = await getAllData(100, name);
      return list;
    };

    let list = await updateList();

    boardGameContainer = list.slice(0, next); // Ensure that the games shown are the new list.

    setProductList(list);
    setInvalidName(false);
    updateGamesToShow(list);
  }

  return (
    <div className={classes.container}>
      <h1>Explore Our Collection</h1>
      <div className={classes.mainContents}>
        <SearchBar onSearch={searchHandler} />
        {invalidName && (
          <p className={classes.error}>Please provide a valid search value.</p>
        )}
        {gamesToShow.length === 0 && (
          <p className={classes.loading}>Loading...</p>
        )}
        {gamesToShow.length !== 0 && <ProductSection list={gamesToShow} />}
        {next < productList.length && (
          <div className={classes.buttonDiv}>
            <button onClick={() => showMorePostsHandler()}>Load More</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
