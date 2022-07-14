import Link from "next/link";

function BurgerMenuContents() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/">About</Link>
      <Link href="/cart">Cart 0</Link>
    </div>
  );
}

export default BurgerMenuContents;
