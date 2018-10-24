import Section from '../Section';
import Container from '../Container';
import Intro from '../Intro';
import Card from './Card';
import team from '../../data/team.json';
import styles from './Team.scss';

const Team = () => (
  <Section className={styles.team}>
    <Container>
      <a name="team" />

      <Intro>
        <h2>Team</h2>
        <p className={styles.large}>
          The nOS team consists of experienced developers and researchers with a history in blockchain and smart contract development.
          With roots in City of Zion, many members of the team have developed on (and for) the NEO Blockchain.
            {/*{' '}*/}
        </p>
      </Intro>

      <div className={styles.cards}>
        {team.map((member) => (
          <Card key={member.name} {...member} />
        ))}
      </div>
    </Container>
  </Section>
);

export default Team;
