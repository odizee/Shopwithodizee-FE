import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';
import { perPage } from './../config';

const ProductsStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    background: #fbfbfb;
    padding: 2rem 1rem;
    margin: auto;
    

`;

export const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY ($skip: Int = 0, $first: Int) {
        allProducts(first: $first, skip: $skip) {
            id
            name 
            price
            description
            photo{
                id 
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

 
export default function Products({page}) {
    const {data, error, loading} = useQuery(ALL_PRODUCTS_QUERY, {
        variables: {
            skip: page * perPage - perPage,
            first: perPage,
        }
    })
    console.log(data, error, loading)
    if(loading) return <p>Loading...</p>;
    return (
        <ProductsStyle>
                {
                    data?.allProducts.map((product) => (
                        <Product key={product.id} product={product}/>
                    ))
                }  
        </ProductsStyle>
    )
    
}