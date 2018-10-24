import Head from 'next/head';
import cookie from 'js-cookie';
import { string, bool } from 'prop-types';

import Navigation from '../Navigation';
import Footer from '../Footer';
import GDPRBanner from '../GDPRBanner';
import './Layout.scss';

export default class Layout extends React.Component {
  static propTypes = {
    title: string,
    ico: bool
  }

  static defaultProps = {
    title: 'nOS - Browse & Build Decentralized Internet',
    ico: false
  }

  state = {
    accepted: true
  }

  componentDidMount = () => {
    if (!cookie.get('gdpr')) {
      this.setState({ accepted: false });
    }
  }

  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="nOS is the Virtual Operating for the Decentralized Internet. Build, discover, and use Decentralized Applications" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="shortcut icon" href="static/logo-nos.png" type="image/x-icon" />
          <title>{this.props.title}</title>
        </Head>

        <Navigation ico={this.props.ico} />
        {this.props.children}
        <Footer />
        {this.renderBanner()}
      </div>
    );
  }

  renderBanner = () => {
    if (this.state.accepted) {
      return null;
    }

    return <GDPRBanner accepted={this.state.accepted} onAccept={this.handleAccept} />;
  }

  handleAccept = () => {
    this.setState({ accepted: true }, () => {
      cookie.set('gdpr', 'true');
    });
  }
}
