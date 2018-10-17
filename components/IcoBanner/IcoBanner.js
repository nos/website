import classNames from 'classnames';
import Section from '../Section';
import styles from './IcoBanner.scss';

const STAGES = [
  { name: 'Private Sale', active: false, finished: true },
  { name: 'KYC', active: true, finished: false },
  { name: 'Pre-Sale', active: false, finished: false },
  { name: 'Public Sale', active: false, finished: false }
];

const IcoBanner = () => (
  <Section className={styles.icoBanner}>
    <h1>Our Token Sale is Live</h1>

    <div className={styles.buttonWrap}>
      <a
        href="https://www.youtube.com/watch?v=2gT2RdsT6k8"
        target="_blank"
        className={classNames(styles.button, styles.buttonPrimary)}
      >
        Token Sale Instructions
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
