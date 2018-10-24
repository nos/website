import Section from '../Section';
import Container from '../Container';
import Intro from '../Intro';
import Card from './Card';
import showcase from '../../data/showcase.json';
import styles from './Showcase.scss';

const PRIMARY_COUNT = 2;

const without = (obj, ...keys) => {
  const copy = { ...obj };
  keys.forEach((key) => {
    delete copy[key];
  });
  return copy;
};

export default class Showcase extends React.Component {
  render() {
    return (
      <Section className={styles.showcase}>
        <Container>
          <a name="showcases" />

          <Intro className={styles.intro}>
            <h2>Decentralized Apps Showcase</h2>
            <p className={styles.large}>
              <a href="https://github.com/nos/client/releases" target="_blank">Download nOS Client</a>{' '}
              to check out early nOSNet Community dApps.
            </p>
          </Intro>

          <div className={styles.cards}>
            {showcase.slice(0, PRIMARY_COUNT).map((app) => this.renderApp(app, true))}
          </div>

          <div className={styles.cards}>
            {showcase.slice(PRIMARY_COUNT).map((app) => this.renderApp(app))}
          </div>
        </Container>
      </Section>
    );
  }

  renderApp = (app, primary = false) => {
    return (
      <Card key={app.name} primary={primary} {...without(app, 'description')}>
        {app.description}
      </Card>
    )
  }
}
