import styled from "styled-components";
import formatMoney from "../lib/formartMoney";
import Link from 'next/link';
import AddToCart from './AddToCart';
import { useCart } from "react-use-cart";

export default function Product({ product }) {

    const ProductStyle = styled.div `
        display: flex;
        flex-direction: column;
        min-width: 24%;
        margin-bottom: 5rem;
        margin-right: auto;
        margin-left: auto;
        height: 40rem;
        justify-content: space-around;
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 5px;
        box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.5);
        position: relative;
        transition: all .1s ease-in-out;
        cursor: pointer;

        :hover {
            transform: scale(1.05);
        }

        .text {
            text-align: start;
            
            .price {
                color: black;
                margin-top: .5rem;
            }
        }

        button {

            :hover {
                background: #f77f00f2;
            }
        }

        @media screen and (max-width: 800px) {
            width: calc(50% - 11px);
        }

        @media screen and (max-width: 285px) {
            width: calc(100% - 11px);
        }


    `;

    const ImageStyle = styled.div `

        width: 100%;
        img {
            width: 100%;
            /* width: 10rem; */
            height: 20rem;
            object-fit: contain;

        }
    `;

        function limit (string = '', limit = 0) {  
            return string.substring(0, limit)
        }

    return (
        <ProductStyle>
            <Link href={`/product/${product.id}`}>
                <div className="product-wrapper">
                <ImageStyle>
                    <img src={product.photo.image.publicUrlTransformed} alt={product.name} />
                </ImageStyle>
                <div className="text">
                    <h3>{limit(product.name, 15) + "..."}</h3>
                    <p className="price">{formatMoney(product.price)}</p>
                </div>
                </div>
            </Link>
            <AddToCart product={product} id={product.id} name={product.name} price={product.price} image={product.photo.image.publicUrlTransformed} />
        </ProductStyle>
    )
}