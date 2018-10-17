import DownloadButton from '../DownloadButton';
import SocialIcon from '../SocialIcon';
import styles from './Footer.scss';

const Footer = () => (
  <footer>
    <div className={styles.left}>
      <img src="static/nos-logo-positive.svg" />
      <p>© Copyright 2018 nOS - All Rights Reserved</p>
      <p><a href="">Terms of service</a> • <a href="">Privacy policy</a></p>
    </div>
    <div className={styles.center}>
      <DownloadButton />
    </div>
    <div className={styles.right}>
      <p>Follow or <a className={styles.email} href="mailto:contact@nos.io">write us</a></p>
      <SocialIcon name="twitter" href="https://twitter.com/nOSplatform" />
      <SocialIcon name="reddit" href="https://www.reddit.com/r/nOSplatform" />
      <SocialIcon name="discord" href="https://discord.nos.io/" />
      <SocialIcon name="telegram" href="https://t.me/nOSplatform" />
      <SocialIcon name="medium" href="https://medium.com/nos-io" />
    </div>
  </footer>
);

export default Footer;