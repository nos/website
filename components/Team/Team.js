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
          2-liner about the team. Mention that it mainly consists of coz developers + clarify{' '}
          that CoZ is related to neo projects as most people don’t get that.
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
