import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import { perPage } from './../config';


const PaginationStyles = styled.div`
        display: flex;
        justify-content: center;
        align-items: stretch;
        width: 50%;
        margin: 2rem auto;

        p, a {
            width: 20%;
            background: #fff;
            font-size: 1.5rem;
            border: 1px solid #f77f00;
            padding: 1rem;
            text-align: center;
        }

        a[aria-disabled='true'] {
            color: grey;
            pointer-events: none;
        }

        @media screen and (max-width: 800px) {
            width: 100%;
        }
`;

const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        _allProductsMeta {
            count
        }
    }
`;

export default function Pagination ({page}) {
    const { error, loading, data } = useQuery(PAGINATION_QUERY)
    if(loading) return 'Loading...'

    const {count} = data?._allProductsMeta;
    const pageCount = Math.ceil(count/perPage);
    return (
        <PaginationStyles>
            <Head>
                <title>Shopwithodizee - page {page} of {pageCount}</title>
            </Head>
            <Link href={`/products/${page - 1}`}>
                <a aria-disabled={page <= 1}>Prev</a>
            </Link>
            <p>Page {page} of {pageCount}</p>
            <p>{count} Items Total</p>
            <Link href={`/products/${page + 1}`}>
                <a aria-disabled={page >= pageCount}>Next</a>
            </Link>
        </PaginationStyles>
    )
}