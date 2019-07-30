import 'what-input';
import Head from 'next/head';
import cookie from 'js-cookie';
import { string, bool } from 'prop-types';

import Navigation from '../Navigation';
import Footer from '../Footer';
import GDPRBanner from '../GDPRBanner';

import './Layout.scss';
import { Provider } from './Context';
import JobPostingBanner from "../JobPostingBanner";

export default class Layout extends React.Component {
  static propTypes = {
    title: string,
    fixed: bool
  }

  static defaultProps = {
    title: 'nOS - Access the crypto-powered web',
    fixed: false
  }

  state = {
    accepted: true,
    downloadUrl: 'https://github.com/nos/client/releases'
  }

  setDownloadUrl = async () => {
    try {
      const resp = await fetch('https://api.github.com/repos/nos/client/releases/latest');
      const response = await resp.json();
      const assets = response.assets;

      assets.forEach(asset => {
        const browserDownloadUrl = asset.browser_download_url;

        if ((browserDownloadUrl.endsWith(".exe") && navigator.platform.indexOf('Win') !== -1) || (browserDownloadUrl.endsWith(".dmg") && navigator.platform.indexOf('Mac') !== -1) || (browserDownloadUrl.endsWith(".AppImage") && navigator.platform.indexOf('Linux') !== -1)) {
          this.setState({downloadUrl: browserDownloadUrl});
        }
      })
    } catch (e) {
      console.error(e);
    }
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
            <meta name="description" content="nOS is an all-in-one platform that introduces new implementable business models powered by blockchain technologies. Any application can leverage nOS to extend its revenue generating strategies without surrendering user privacy." />
            <meta name="og:image" content="static/dapps-snapshot.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="shortcut icon" href="static/logo-nos.png" type="image/x-icon" />
            <title>{this.props.title}</title>
          </Head>

          <Navigation fixed={this.props.fixed} />
          {this.props.children}
          <Footer />
          {this.renderBanner()}
          {this.renderJobBanner()}
        </div>
      </Provider>
    );
  }

  renderJobBanner = () => {
    if (this.state.closed) {
      return null;
    }

    return <JobPostingBanner accepted={this.state.closed} onClose={this.handleClose} />;
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

  handleClose = () => {
    this.setState({ closed: true });
  }

}
