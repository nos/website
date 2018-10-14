import Head from 'next/head';

import Navigation from '../Navigation';
import './Layout.scss';

const Layout = (props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{props.title || 'nOS'}</title>
    </Head>

    <Navigation />
    {props.children}
  </div>
);

export default Layout;
