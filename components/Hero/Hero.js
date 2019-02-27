import Section from '../Section';
import Decorator from '../Decorator';
import DownloadButton from '../DownloadButton';
import SocialIcon from '../SocialIcon';
import styles from './Hero.scss';

const Hero = () => (
  <Section className={styles.hero}>
    <a name="hero" />
    <h1>Discover &amp; Build the web of the future</h1>

    <p className={styles.large}>
      Access the new, decentralized internet. nOS is the virtual operating system for the Smart Economy.
    </p>

    <Decorator
      version={3}
      animation={1}
      outline
      style={{ left: '-90px', top: '112px', width: '260px', height: '260px' }}
    />
    <Decorator version={3} animation={2} style={{ right: '2%', top: '570px', width: '80px', height: '80px' }} />
    <Decorator version={2} animation={3} outline style={{ left: '18%', width: '200px', height: '200px' }} />

    <Decorator version={1} animation={1} outline style={{ right: '18%', width: '200px', height: '200px' }} />

    <Decorator version={2} animation={2} style={{ right: '30%', width: '90px', height: '90px' }} />

    <Decorator version={1} animation={2} style={{ left: '8%', bottom: '8%', width: '160px', height: '160px' }} />

    <Decorator version={1} animation={4} style={{ right: '18%', width: '120px', height: '120px' }} />

    <div className={styles.download}>
      <DownloadButton starGazer={true} />
      <div className={styles.meta}>
        <a href="static/whitepaper.pdf">Whitepaper</a>
        {' • '}
        <a href="https://github.com/nos" target="_blank">
          GitHub
        </a>
      </div>
      <div className={styles.social}>
        <SocialIcon name="twitter" href="https://twitter.com/nOSplatform" />
        <SocialIcon name="reddit" href="https://www.reddit.com/r/nOSplatform" />
        <SocialIcon name="discord" href="https://discord.nos.io/" />
        <SocialIcon name="telegram" href="https://t.me/nOSchat" />
        <SocialIcon name="medium" href="https://medium.com/nos-io" />
      </div>
    </div>

    <div className={styles.productShot}>
      <img src="static/hero.png" />
    </div>
  </Section>
);

export default Hero;
