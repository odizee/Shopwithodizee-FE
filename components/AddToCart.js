import { useState, useEffect } from 'react';
import {useCart} from "react-use-cart"

export default function AddToCart({ product, id, name, price, image }) {

    const [products, setProduct] = useState([])
    const productData = [id, name, price, image]
   

    useEffect(() => {
      setProduct(productData)
    }, [])
    
    
    const handleSubmit = () => {
      console.log(products[1])
    }
      const { addItem } = useCart()
  return (
    // <button disabled={loading} type="button" onClick={addToCart}>
    //   Add{loading && 'ing'} To Cart 
    // </button>
    <button type="button" onClick={() => addItem(product)}>Add to Cart 🛒</button>
    


  );
}