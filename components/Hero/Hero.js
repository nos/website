import Section from '../Section';
import Decorator from '../Decorator';
import DownloadButton from '../DownloadButton';
import styles from './Hero.scss';

const Hero = () => (
  <Section className={styles.hero}>
      <a name="hero"></a>
    <h1>Browse &amp; Build the web of the future</h1>

    <p className={styles.large}>
      Access the new, decentralized internet. nOS is a web browser, app store and virtual operating system.
    </p>

    <Decorator
      version={3}
      animation={1}
      outline
      style={{ left: '-90px', top: '112px', width: '260px', height: '260px' }}
    />
    <Decorator
      version={3}
      animation={2}
      style={{ right: '2%', top: '570px', width: '80px', height: '80px' }}
    />
    <Decorator
      version={2}
      animation={3}
      outline
      style={{ left: '18%', width: '200px', height: '200px' }}
    />

    <Decorator
      version={1}
      animation={1}
      outline
      style={{ right: '18%', width: '200px', height: '200px' }}
    />

    <Decorator
      version={2}
      animation={2}
      style={{ right: '30%', width: '90px', height: '90px' }}
    />

    <Decorator
      version={1}
      animation={2}
      style={{ left: '8%', bottom: '8%', width: '160px', height: '160px' }}
    />

    <Decorator
      version={1}
      animation={4}
      style={{ right: '18%', width: '120px', height: '120px' }}
    />

    <div className={styles.download}>
      <DownloadButton />
      <div className={styles.meta}>
        <a href="static/whitepaper.pdf">Whitepaper</a>
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
