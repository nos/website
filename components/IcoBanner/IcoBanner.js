import classNames from 'classnames';
import Section from '../Section';
import styles from './IcoBanner.scss';

const STAGES = [
  { name: 'Private Sale', active: false, finished: true },
  { name: 'Whitelist', active: false, finished: true },
  { name: 'KYC', active: true, finished: false },
  { name: 'Public Sale', active: false, finished: false }
];

const IcoBanner = () => (
  <Section className={styles.icoBanner}>
    <h1>Our Token Sale starts Oct 29 18:00 UTC</h1>

    <div className={styles.buttonWrap}>
      <a
        href="https://medium.com/nos-io/nos-token-sale-begins-monday-october-29th-20-00-cest-a426d1e8aba1"
        target="_blank"
        className={classNames(styles.button, styles.buttonPrimary)}
      >
        Token Sale Details
      </a>
      <a
        href="https://www.youtube.com/watch?v=CcwBNpAfRiU"
        target="_blank"
        className={classNames(styles.button, styles.buttonSecondary)}
      >
        nOS Announcement Video
      </a>
    </div>

    <div className={styles.progressContainer}>
      <div className={styles.progressIndicatorWrap}>
        <div className={styles.progressIndicatorItems}>
          {STAGES.map(({ name, active, finished }) => (
            <div key={name} className={classNames(styles.progressItem, { [styles.active]: active, [styles.finished]: finished })}>
              <span className={styles.progressLabel}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className={styles.social}>
      <a href="https://twitter.com/nOSplatform" target="_blank" className={styles.socialTwitter}></a>
      <a href="https://medium.com/nos-io" target="_blank" className={styles.socialMedium}></a>
      <a href="https://t.me/nOSplatform" target="_blank" className={styles.socialTelegramMain}></a>
      <a href="https://t.me/nOSAnnouncements" target="_blank" className={styles.socialTelegramAnn}></a>
    </div>
  </Section>
);

export default IcoBanner;
