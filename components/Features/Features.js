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
        <p>Just like your everyday browser, but with the added benefit of integrating with the nOS Protocol, a blockchain-powered web protocol that facilitates secure and open accessibility of nOS dApps.</p>
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
        <p>Discover dApps in our user-friendly dApp gateway. Unlike in traditional App stores, nOS rankings are controlled in an open, decentralized, and democratic manner.</p>
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
        <p>Manage your crypto-currency tokens and digital assets securely in our Wallet application.</p>
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
        <p>Exchange-related text...</p>
      </Feature>
    );
  }
}
