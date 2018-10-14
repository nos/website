import Section from '../Section';
import Container from '../Container';
import Intro from '../Intro';
import Card from './Card';
import styles from './Showcase.scss';

const Showcase = () => (
  <Section className={styles.showcase}>
    <Container>
      <a name="showcases" />

      <Intro className={styles.intro}>
        <h2>Decentralized Apps Showcase</h2>
        <p className={styles.large}>
          nOS is the world’s first platform with 65+ dApps running on its public testnet before{' '}
          releasing a whitepaper and before holding its ICO. Please{' '}
          <a href="https://github.com/nos/client/releases" target="_blank">download & install nOS</a>{' '}
          to check out early nOSNet Community dApps.
        </p>
      </Intro>

      <div className={styles.cards}>
        <Card primary color="blue" name="Voteo" image="static/dapp-voteo.png" url="nos://voteo.neo" code="#">
          Voteo is a poll and quiz dApp. Users can create public and private polls.
        </Card>

        <Card primary color="red" name="Posts" image="static/dapp-posts.png" url="nos://posts.neo" code="#">
          Posts.neo is a decentralized forum application. Users can create topics, write replies, and more.
        </Card>
      </div>

      <div className={styles.cards}>
        <Card color="red" name="nOS Tracker" image="static/dapp-nostracker.png" url="nos://tracker.neo" code="#">
          nOS Tracker utilizes a Telegram bot to send you notifications about your nOS wallet activities.
        </Card>

        <Card color="green" name="NeoChat" image="static/dapp-neochat.png" url="nos://neochat.neo" code="#">
          A decentralized messenger that support message encryption.
        </Card>

        <Card color="blue" name="Bet Manager" image="static/dapp-betmanager.png" url="nos://betmanager.neo" code="#">
          A decentralized messenger that support message encryption.
        </Card>
      </div>
    </Container>
  </Section>
);

export default Showcase;
