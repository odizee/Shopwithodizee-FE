import Link  from 'next/link';
import styled from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';
import logo from '../assets/Shopwithodizee.png';
import Image from 'next/image'



const HeaderStyles = styled.header`
    /* background: #003049; */
    .bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        padding: 2rem 0;
        margin: auto;
        @media screen and (max-width: 1200px) {
            padding: 2rem 3rem;
        }
        @media screen and (max-width: 700px) {
            flex-direction: column;
            > * {
                margin-bottom: 2rem;
            }
        }
        .search {
            width: 40%;
            display: flex;
            justify-content: center;
            
        }

        Nav {
            justify-content: center;
        }
        
    }
`
const Logo = styled.h1`
    font-size: 4rem;
    position: relative;
    z-index: 2;
    background: #f77f00;
    box-shadow: 0 4px 8px 0 #3535344e;
    width: 10%;
    height: 10%;
    text-align: center;
    cursor: pointer;
    
    @media screen and (max-width: 700px) {
            
    }
    
    a {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        padding: .5rem 1rem;
    }
`;



const Menu = styled.div`
    font-size: 2rem;
    justify-content: center;
`

export default function Header() {
    return (
        <HeaderStyles>
            <div className="bar">
                <Logo>
                    <Link href="/">                                        
                        <Image src={logo} alt="logo" />
                    </Link>
                </Logo>
                <Menu>
                    <Nav />
                </Menu>
                <Search className="search"/>
            </div>
            <Cart />
        </HeaderStyles>
    )
}