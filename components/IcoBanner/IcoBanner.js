import classNames from 'classnames';
import Section from '../Section';
import styles from './IcoBanner.scss';

const STAGES = [
  { name: 'Private Sale', active: false, finished: true },
  { name: 'Whitelist', active: false, finished: true },
  { name: 'KYC', active: false, finished: true },
  { name: 'Public Sale', active: true, finished: false }
];

const IcoBanner = () => (
  <Section className={styles.icoBanner}>
    <h1>Our Token Sale has Started!</h1>

    <div className={styles.buttonWrap}>
      <a
        href="https://medium.com/nos-io/nos-token-sale-details-instructions-ecee9ccdae1c"
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
      <a href="https://t.me/nOSAnnouncements" target="_blank" className={styles.socialTelegramAnn}></a>
      <a href="https://t.me/nOSchat" target="_blank" className={styles.socialTelegramMain}></a>
      <a href="https://discord.nos.io" target="_blank" className={styles.socialDiscord}></a>
    </div>
  </Section>
);

export default IcoBanner;
