import { useState, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import ProductPage from "../../components/Products/ProductPage";
import {
  deleteUndefined,
  getAllData,
  getNRandomData,
} from "../../lib/get-data";

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
}

// const gamesPerLoad = 8;
// let boardGameContainer: Data[] = [];
// let count = 1; // Avoid second render causing duplicates (because of React.StrictMode)

function ProductsListPage() {
// props: InferGetStaticPropsType<typeof getStaticProps>
  // SSR version of this page
  // const [gamesToShow, setGamesToShow] = useState<Data[]>([]);
  // const [next, setNext] = useState(gamesPerLoad);

  // useEffect(() => {
  //   if (count == 2) loopWithSlice(0, gamesPerLoad);
  //   else count++;
  // }, []);

  // const loopWithSlice = (start: number, end: number) => {
  //   const slicedGames = props.productList.slice(start, end);
  //   boardGameContainer = [...boardGameContainer, ...slicedGames];
  //   setGamesToShow(boardGameContainer);
  // };

  // const showMorePostsHandler = () => {
  //   loopWithSlice(next, next + gamesPerLoad);
  //   setNext(next + gamesPerLoad);
  // };

  const [productList, setProductList] = useState<Data[]>([]);

  // Fetch the data
  useEffect(() => {
    async function fetchData() {
      const data = await getAllData(100);
      setProductList(data);
      console.log(data.length);
    }

    fetchData();
  }, []);

  return (
    <ProductPage productList={productList} />
    // <ProductPage showMorePostsHandler={showMorePostsHandler}
    // gamesToShow={gamesToShow} />
  );
}

export default ProductsListPage;

// export const getStaticProps: GetStaticProps = async () => {
//   const productList = await getAllData(100);

//   deleteUndefined(productList);

//   return {
//     props: { productList },
//   };
// };
