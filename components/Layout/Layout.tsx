import { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: any;
}

function Layout(props: LayoutProps) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
