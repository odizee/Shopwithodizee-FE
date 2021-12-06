import Header from './Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html{
        font-size: 62.5%;

        @media (max-width: 75em) {
        font-size: 56.25%; //1 rem = 9px, 9/16 = 56.25%
   }

        @media (max-width: 56.25em) {
        font-size: 50%; //1 rem = 8px/16 = 50%
    }

    @media (max-width: 23.43em) {
        font-size: 31.25%; //1 rem = 5, 5/16 = 31.25%
    }

        &::-webkit-scrollbar{
            width: 1rem;
            border-radius: 4rem;
            box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);                
            background-color: #F5F5F5;
    }

        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
            border-radius: 5rem;
            box-shadow: inset 0 0 10px #25203a;
        }

        &::-webkit-scrollbar-track {
        background-color: #fff;
    }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        max-width: 1200px;
        width: 100%;
        margin: auto;
        background: #F2F2F2;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;

        @media (max-width: 56.25em) {
        font-size: 2rem;
    }
    }
    h3{
        font-size: 1.8rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.8rem;
        width: 100%;
        line-height: 100%;
        color: #696969;
        @media (max-width: 56.25em) {
            font-size: 1.5rem;
        }
    }
    a{
        text-decoration: none;
        color: #333;
        @media (max-width: 20.25em) {
            font-size: 2.5rem;
        }

    }
    img{
        display: block; 
    }

    input {
        font-family: 'Montserrat', sans-serif;

    }

    button {
        padding: .5rem;
        box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
        height: 4rem;
        border-radius: 3px;
        border: none;
        cursor: pointer;
        color: white;
        background: #F77F00;

    }
`

export default function Page({children}) {
    return <div>
        <GlobalStyle />
        <Header />
        {children}
    </div>
}


