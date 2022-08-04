import { useState, useEffect } from "react";

import ProductPage from "../../components/Products/ProductPage";
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

function ProductsListPage() {
  const [productList, setProductList] = useState<Data[]>([]);

  // Fetch the data
  useEffect(() => {
    async function fetchData() {
      const data = await getAllData(100);
      setProductList(data);
    }

    fetchData();
  }, []);

  return <ProductPage productList={productList} />;
}

export default ProductsListPage;
