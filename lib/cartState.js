import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {


  // Closed cart by default
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useCartState() {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCartState };