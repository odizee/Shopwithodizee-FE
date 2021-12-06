import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import { CartStateProvider } from '../lib/cartState';
import { CartProvider } from 'react-use-cart';
import client from './../lib/client';

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CartProvider>
      <CartStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CartStateProvider>
      </CartProvider>
    </ApolloProvider>
    
    )
}

MyApp.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};
  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default client(MyApp)
