import Head from 'next/head';
import { string, bool } from 'prop-types';

import Navigation from '../Navigation';
import Footer from '../Footer';
import './Layout.scss';

const Layout = (props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{props.title}</title>
    </Head>

    <Navigation ico={props.ico} />
    {props.children}
    <Footer />
  </div>
);

Layout.propTypes = {
  title: string,
  ico: bool
};

Layout.defaultProps = {
  title: 'nOS',
  ico: false
};

export default Layout;
