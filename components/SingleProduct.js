import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head' 
import styled from 'styled-components';
import Product from './Product';
import AddToCart from './AddToCart';

const SINGLE_ITEM_QUERY =gql`
    query SINGLE_ITEM_QUERY($id: ID!) {
        Product(where: { id: $id }) {
            name
            price
            description
            id
            photo {
                    altText
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

const ProductStyles = styled.div` 
    display: flex;
    background: white;
    min-height: 100%;
    img {
        width: 40%;
        height: 100%;
        border-bottom: 1px #2211113d solid;
        margin: 2rem;
    }
    .details {
        margin-top: 2rem;
        width: 100%;
        padding: 2rem;
        margin-bottom: 2rem;
        box-shadow: 0 4px 8px 0 #3535344e;
        border-radius: 2px;
        color: #fff;
        align-self: stretch;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-text {
            background: #f77f00;
            padding: 2rem;           
        }
        h2 {
            margin-bottom: 1rem;
        }

        p {
            color: #f3f3f3;
        }
    }
`;

export default function SingleProduct({ id }) {
    const { data, loading, error } = useQuery
    (SINGLE_ITEM_QUERY, {
        variables: {
            id,
        }
    }
        );
    if(loading) return <p>Loading...</p>;
    const { Product } = data
    return (
        <ProductStyles>
            <Head>
                <title>Shopwithodizee | {Product.name}</title>
            </Head>
            <img src={Product.photo.image.publicUrlTransformed} alt={Product.photo.image.altText} />
            <div className="details">
                <div className="details-text">
                    <h2>{Product.name}</h2>
                    <p>{Product.description}</p>
                </div>

                <AddToCart product={Product} id={Product.id} name={Product.name} price={Product.price} image={Product.photo.image.publicUrlTransformed} />
            </div>

        </ProductStyles>
        )
}