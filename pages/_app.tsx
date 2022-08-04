import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout/Layout";
import { CartProvider } from "../store/cart-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
