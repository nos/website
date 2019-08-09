import Link from 'next/link';

import DownloadButton from '../DownloadButton';
import SocialIcon from '../SocialIcon';
import styles from './Footer.scss';

const Footer = () => (
  <footer>
    <div className={styles.left}>
      <img src="static/nos-logo-positive.svg" />
      <p>© Copyright 2018-2019 nOS - All Rights Reserved</p>
      <p><Link href="/privacy"><a>Privacy Policy</a></Link></p>
    </div>
    <div className={styles.center}>
      <DownloadButton />
    </div>
    <div className={styles.right}>
      <p>Follow or <a className={styles.email} href="mailto:contact@nos.io">write us</a></p>
      <SocialIcon name="twitter" href="https://twitter.com/nOSplatform" />
      <SocialIcon name="reddit" href="https://www.reddit.com/r/nOSplatform" />
      <SocialIcon name="noschat" href="https://nos.chat/" />
      <SocialIcon name="telegram" href="https://t.me/nOSchat" />
      <SocialIcon name="medium" href="https://medium.com/nos-io" />
    </div>
  </footer>
);

export default Footer;
