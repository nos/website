import Section from '../Section';
import styles from './Partners.scss';

const Partners = () => (
  <Section className={styles.partners}>
    <h3>Our Partners</h3>
    <div className={styles.logos}>
      <img src="static/logo-ngc.png" width="97" />
      <img src="static/logo-moonlight.png" width="198" />
      <img src="static/logo-nex.png" width="62" />
    </div>
  </Section>
);

export default Partners;
