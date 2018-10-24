import Section from '../Section';
import Decorator from '../Decorator';
import Feature from './Feature';
import styles from './Features.scss';

export default class Features extends React.Component {
  render() {
    return (
      <Section className={styles.features}>
        <a name="features" />
        {this.renderBrowser()}
        {this.renderApps()}
        {this.renderWallet()}
        {this.renderExchange()}
      </Section>
    );
  }

  renderBrowser = () => {
    return (
      <Feature renderImage={() => (
        <React.Fragment>
          <img src="static/feature-browser.svg" />
          <Decorator
            version={2}
            animation={1}
            outline
            style={{ left: '58%', top: '-38px', width: '160px', height: '160px' }}
          />
          <Decorator
            version={1}
            animation={2}
            style={{ left: '3%', top: '196px', width: '220px', height: '220px' }}
          />
        </React.Fragment>
      )}>
        <img src="static/icon-feature-browser.svg" />
        <h2>Open Internet Browser</h2>
          <p>Use nOS Client and experience the open, decentralized internet. Access applications (dApps) that use the nos:// protocol, interact with crypto-currencies, and own your data.</p>
      </Feature>
    )
  }

  renderApps = () => {
    return (
      <Feature flip renderImage={() => (
        <React.Fragment>
          <img src="static/feature-dapps.svg" />
          <Decorator
            version={1}
            animation={5}
            outline
            style={{ right: '77%', top: '-38px', width: '190px', height: '190px' }}
          />
          <Decorator
            version={2}
            animation={1}
            style={{ right: '-7%', top: '172px', width: '220px', height: '220px' }}
          />
        </React.Fragment>
      )}>
        <img src="static/icon-feature-dapps.svg" />
        <h2>dApp Gateway</h2>
        <p>Discover decentralized applications in our user-friendly dApp Gateway. Unlike traditional App Stores, nOS applications are ranked in an open and decentralized manner.</p>
      </Feature>
    );
  }

  renderWallet = () => {
    return (
      <Feature renderImage={() => (
        <React.Fragment>
          <img src="static/feature-wallet.svg" />
          <Decorator
            version={2}
            animation={2}
            outline
            style={{ right: '32%', top: '-38px', width: '340px', height: '340px' }}
          />
          <Decorator
            version={3}
            animation={5}
            style={{ right: '13%', bottom: '-68px', width: '180px', height: '180px' }}
          />
        </React.Fragment>
      )}>
        <img src="static/icon-feature-wallet.svg" />
        <h2>Crypto Wallet</h2>
        <p>Manage, send, and receive crypto-currencies and digital assets securely in the Wallet tab of nOS Client.</p>
      </Feature>
    );
  }

  renderExchange = () => {
    return (
      <Feature flip renderImage={() => (
        <React.Fragment>
          <img src="static/feature-exchange.svg" />
          <Decorator
            version={2}
            animation={1}
            outline
            style={{ left: '58%', top: '-38px', width: '160px', height: '160px' }}
          />
          <Decorator
            version={1}
            animation={2}
            style={{ left: '3%', top: '196px', width: '220px', height: '220px' }}
          />
        </React.Fragment>
      )}>
        <img src="static/icon-feature-exchange.svg" />
        <h2>Exchange</h2>
        <p>Powered by NEX, nOS lets you easily trade crypto-currencies and other digital assets, directly from nOS Client.</p>
      </Feature>
    );
  }
}
