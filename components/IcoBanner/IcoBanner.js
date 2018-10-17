import classNames from 'classnames';
import Section from '../Section';
import styles from './IcoBanner.scss';

const IcoBanner = () => (
  <Section className={styles.icoBanner}>
    <h1>Our Token Sale is Live</h1>

    <div className={styles.buttonWrap}>
      <a href="#" className = {classNames(styles.button, styles.buttonPrimary)}>Token Sale Instructions</a>
      <a href="#" className = {classNames(styles.button, styles.buttonSecondary)}>nOS Announcement Video</a>
    </div>
    <div className={styles.progressContainer}>
      <div className={styles.progressIndicatorWrap}>
        <div className={styles.progressIndicatorItems}>
          
          <div className={classNames(styles.progressItem, styles.progressItemOne, styles.finished)}>
            <span className={styles.progressLabel}>
              Private Sale
            </span>
          </div>

          <div className={classNames(styles.progressItem, styles.progressItemTwo, styles.active)}>
            <span className={styles.progressLabel}>
              KYC
            </span>
          </div>

          <div className={classNames(styles.progressItem, styles.progressItemThree)}>
            <span className={styles.progressLabel}>
              Pre-Sale
            </span>
          </div>

          <div className={classNames(styles.progressItem, styles.progressItemFour)}>
            <span className={styles.progressLabel}>
              Public Sale
            </span>
          </div>

        </div>
      </div>
    </div>
    <div className={styles.social}>
      <a href="#" className={styles.socialTwitter}></a>
      <a href="#" className={styles.socialMedium}></a>
      <a href="#" className={styles.socialTelegramMain}></a>
      <a href="#" className={styles.socialTelegramAnn}></a>
    </div>
  </Section>
);

export default IcoBanner;