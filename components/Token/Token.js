import Section from '../Section';
import Container from '../Container';
import Intro from '../Intro';
import styles from './Token.scss';
import Card from './Card';
import token from '../../data/token.json';
import exchanges from '../../data/exchanges.json';

const Token = () => (
  <Section className={styles.token}>
    <Intro>
      <h3 className={styles.subtitle}>Token Utility</h3>
      <h2>NOS Token</h2>
      <p className={styles.large}>
        NOS is the backbone of the nOS Virtual Operating System. 
        <span className={styles.small}>Please note that we are still adding new utilities. Not all listed features are live yet.</span>
          {/*{' '}*/}
      </p>
    </Intro>
    <div className={styles.cards}>
      {token.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
    <Container>
      <h3 className={styles.subtitle}>Get NOS token</h3>
      <div className={styles.exchanges}>
        {exchanges.map((exchange) => (
          <a href={exchange.url}><img key={exchange.name} src={exchange.image} alt={exchange.name} width={exchange.width} /></a>
        ))}
      </div>
    </Container>
  </Section>
);

export default Token;