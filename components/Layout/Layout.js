import 'what-input';
import Head from 'next/head';
import cookie from 'js-cookie';
import { string, bool } from 'prop-types';

import Navigation from '../Navigation';
import Footer from '../Footer';
import GDPRBanner from '../GDPRBanner';

import './Layout.scss';
import { Provider } from './Context';

export default class Layout extends React.Component {
  static propTypes = {
    title: string,
    fixed: bool
  }

  static defaultProps = {
    title: 'nOS - Operating System for the Decentralized Internet',
    fixed: false
  }

  state = {
    accepted: true,
    downloadUrl: 'https://github.com/nos/client/releases'
  }

  setDownloadUrl = async () => {
    const resp = await fetch('https://api.github.com/repos/nos/client/releases/latest');
    const response = await resp.json();
    const assets = response.assets;

    assets.forEach(asset => {
      const browserDownloadUrl = asset.browser_download_url;

      if ((browserDownloadUrl.endsWith(".exe") && navigator.platform.indexOf('Win') !== -1) || (browserDownloadUrl.endsWith(".dmg") && navigator.platform.indexOf('Mac') !== -1) || (browserDownloadUrl.endsWith(".AppImage") && navigator.platform.indexOf('Linux') !== -1)) {
        this.setState({downloadUrl: browserDownloadUrl});
      }
    })
  }

  componentDidMount = () => {
    this.setDownloadUrl();

    if (!cookie.get('gdpr')) {
      this.setState({ accepted: false });
    }
  }

  render() {
    return (
      <Provider value={this.state.downloadUrl}>
        <div>
          <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="nOS is the Virtual Operating for the Decentralized Internet. Build, discover, and use Decentralized Applications" />
            <meta name="og:image" content="static/dapps-snapshot.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="shortcut icon" href="static/logo-nos.png" type="image/x-icon" />
            <title>{this.props.title}</title>
          </Head>

          <Navigation fixed={this.props.fixed} />
          {this.props.children}
          <Footer />
          {this.renderBanner()}
        </div>
      </Provider>
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
