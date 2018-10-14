import Section from '../Section';
import Decorator from '../Decorator';
import DownloadButton from '../DownloadButton';
import styles from './Hero.scss';

const Hero = () => (
  <Section className={styles.hero}>
    <h1>Browse &amp; Build the web of the future</h1>

    <p className={styles.large}>
      Access the new, decentralized internet. nOS is a web browser, app store and virtual operating system.
    </p>

    <Decorator
      version={1}
      animation={2}
      style={{ left: '-17%', top: '112px', width: '320px', height: '320px' }}
    />
    <Decorator
      version={2}
      animation={2}
      style={{ right: '2%', top: '570px', width: '80px', height: '80px' }}
    />
    <Decorator
      version={2}
      animation={1}
      outline
      style={{ left: '18%', top: '360px', width: '200px', height: '200px' }}
    />

    <div className={styles.download}>
      <DownloadButton />
      <div className={styles.meta}>
        <a href="whitepaper.pdf">Whitepaper</a>
        {' • '}
        <a href="https://github.com/nos" target="_blank">GitHub</a>
      </div>
    </div>

    <div className={styles.productShot}>
      <img src="static/hero.png" />
    </div>
  </Section>
);

export default Hero;
