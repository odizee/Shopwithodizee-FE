import styled from 'styled-components';
import { useCartState } from '../lib/cartState';
import formatMoney from './../lib/formartMoney';
import {useCart} from 'react-use-cart';
import { useEffect } from 'react';
import calcTotalPrice from '../lib/calcTotalPrice';

  const CartItemStyles = styled.li`
    padding: 1rem 0;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    img {
      margin-right: 1rem;
      max-width: 20%;
    }
    h3,
    p {
      margin: 0;
    }
    .item-button {
      display: flex;
      width: 8rem;
      justify-content: space-between;
      align-items: center;
      button {
        padding: .8rem;
      }
    }
  `;
  
  const CartStyles = styled.div`
    padding: 20px;
    position: relative;
    background: white;
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    width: 40%;
    min-width: 300px;
    bottom: 0;
    transform: translateX(100%);
    transition: all 0.3s;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    z-index: 5;
    display: grid;
    grid-template-rows: auto 1fr auto;
    ${(props) => props.open && `transform: translateX(0);`};
    header {
      border-bottom: 5px solid black;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
    }
    footer {
      border-top: 10px double black;
      margin-top: 2rem;
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 3rem;
      font-weight: 900;
      p {
        margin: 0;
        flex: 0;
      }
    }
    ul {
      margin: 0;
      padding: 2rem;
      list-style: none;
      overflow: scroll;
    }
  `;
  
  const CloseButton = styled.button`
    background: black;
    color: white;
    font-size: 3rem;
    border: 0;
    position: absolute;
    z-index: 2;
    right: 0;
    margin: 0 2rem;
  `;

export default function Cart() {

  const product = typeof window !== "undefined" && JSON.parse(localStorage.getItem('product'))

  const {cartOpen, closeCart} = useCartState();

    const {
      items,
      isEmpty,
      totalItems,
      totalUniqueItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,
      
    } = useCart();

    return (
        
        <CartStyles open={cartOpen}>
            
            <header>
                <CloseButton onClick={closeCart}>&times;</CloseButton>                  
              {(isEmpty) && <h1>No item</h1>}
            </header>
            <ul>
              {items.map((item) => (
                <CartItemStyles key={item.id}>
                
                <img
                  width="100"
                  src={item.photo.image.publicUrlTransformed}
                  alt={item.name}
                />
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {formatMoney(item.price * item.quantity)}-
                    <em>
                      {item.quantity} &times; {formatMoney(item.price)} each
                    </em>
                  </p>
                </div>
                <div className="item-button">
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>&#8722;</button>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>&#43;</button>
                </div>
              </CartItemStyles> 
              ))}
            </ul>
            <footer>
              {<p>{formatMoney(cartTotal)}</p>}
              <button onClick={() => emptyCart()}>Bin All Items</button>
            </footer>
            
        </CartStyles>

    );
}