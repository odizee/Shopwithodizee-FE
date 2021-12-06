import Link from 'next/link';
import styled from 'styled-components';
import { useCartState } from '../lib/cartState';

const Navmenu = styled.nav`
    display: flex;
    align-items: center;

        > * {
            margin-right: 3rem;
        }
    a {
        color: black;
        text-decoration: none;
        padding: 0 .5rem;
    }
`;

export default function Nav() {
    const {openCart} = useCartState();

    return (
        <Navmenu>
            <Link href="/products"> Product</Link>
            <Link href="/sell"> Add </Link>
            <button type="button" onClick={openCart}>My cart</button>
        </Navmenu>
    )
}

