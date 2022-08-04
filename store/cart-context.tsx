import { createContext, useContext, useReducer } from "react";

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
  publisher: string;
  difficulty: number;
  age: number;
  min_playtime: number;
  max_playtime: number;
  amount: number;
}

interface CartState {
  items: Data[]; // TODO: fix
  totalAmount: number;
}

interface CartContextInterface {
  items: Data[];
  totalAmount: string | number;
  addItem: (item: Data) => void;
  removeItem: (item: string | number) => void;
  checkout: () => void;
}

interface Action {
  type: string;
  item?: Data;
  id?: string | number;
}

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Initialize Cart Context
const CartContext = createContext<CartContextInterface>({
  items: [],
  totalAmount: 0,
  addItem: (item: Data) => {},
  removeItem: (id: string | number) => {},
  checkout: () => {},
});

// Cart Reducer Function
const cartReducer = (state: CartState, action: Action): CartState => {
  // Add item to cart functionality
  if (action.type === "ADD") {
    // Update the total amount
    const updatedTotalAmount =
      state.totalAmount + action.item!.msrp * action.item!.amount;

    // Find the index if the product is already in cart
    const existingCartItemIndex = state.items.findIndex(
      (item: Data) => item.id === action.item!.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // If the item is already in cart, increment count and total amount
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item!.amount,
      };

      // Create new array with updated item and its new totalAmount
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // Otherwise, add the new item
    else {
      updatedItems = state.items.concat(action.item!);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // Remove item from cart functionality
  if (action.type === "REMOVE") {
    // Get index in cart of item to remove
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // Update values accordingly
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.msrp;

    let updatedItems;

    // If there's only one item left, completely remove it from items list
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    // Otherwise, decrement it
    else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CHECKOUT") {
    return defaultCartState;
  }

  return defaultCartState;
};

// Main function component
export function CartProvider(props: any) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: Data) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const deleteItemFromCartHandler = (id: string | number) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const checkoutHandler = () => {
    dispatchCartAction({ type: "CHECKOUT" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount.toFixed(2),
    addItem: addItemToCartHandler,
    removeItem: deleteItemFromCartHandler,
    checkout: checkoutHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
