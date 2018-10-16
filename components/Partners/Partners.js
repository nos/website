import Section from '../Section';
import partners from '../../data/partners.json';
import styles from './Partners.scss';

const Partners = () => (
  <Section className={styles.partners}>
    <h3>Our Partners</h3>
    <div className={styles.logos}>
      {partners.map((partner) => (
        <img key={partner.name} src={partner.image} alt={partner.name} width={partner.width} />
      ))}
    </div>
  </Section>
);

export default Partners;
