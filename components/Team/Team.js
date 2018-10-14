import Section from '../Section';
import Container from '../Container';
import Intro from '../Intro';
import Card from './Card';
import styles from './Team.scss';

const Team = () => (
  <Section className={styles.team}>
    <Container>
      <a name="team" />

      <Intro>
        <h2>Team</h2>
        <p className={styles.large}>
          2-liner about the team. Mention that it mainly consists of coz developers + clarify that CoZ is related to neo projects as most people don’t get that.
        </p>
      </Intro>

      <div className={styles.cards}>
        <Card
          name="Dean van Dugteren"
          role="Founder & CEO"
          image="static/team-dean.png"
          experience={[
            'Developer at City of Zion',
            'Founder VDT.Network',
            'Founder Click.DJ'
          ]}
          linkedin="https://twitter.com/Deanpress"
          twitter="https://linkedin.com/in/Deanpress"
          github="https://github.com/deanpress"
        />
        <Card
          name="Matt Huggins"
          role="Lead Developer"
          image="static/team-matt.png"
          experience={[
            'Developer at City of Zion',
            'Maintainer of Neon Wallet'
          ]}
          linkedin="https://twitter.com/mhuggins"
          twitter="https://linkedin.com/in/huggie/"
          github="https://github.com/mhuggins"
        />
        <Card
          name="Jeroen Peeters"
          role="Developer / Project Management"
          image="static/team-jeoren.png"
          experience={[
            'Front-end Consultant at Evance',
            'Contributor at City of Zion',
            'Creator of Neoblog'
          ]}
          linkedin="https://twitter.com/_jptrs"
          twitter="https://linkedin.com/in/jeroenptrs/"
          github="https://github.com/jeroenptrs"
        />
        <Card
          name="Maurice Dalderup"
          role="Full-stack Developer"
          image="static/team-maurice.png"
          experience={[
            'Blockchain Consultant at Trase',
            'Contributor at City of Zion',
            'Creator of Neoblog'
          ]}
          linkedin="https://twitter.com/mauricedalderup"
          twitter="https://linkedin.com/in/mauricedalderup/"
          github="https://github.com/dalderupmaurice"
        />
        <Card
          name="Fabricio Rosa Marques"
          role="Design Contributor"
          image="static/team-fab.png"
          experience={[
            'Lead Designer at Pitch',
            'Product Designer at Pie',
            'Designer at fournova (Tower)'
          ]}
          linkedin="https://linkedin.com/in/fabriciorm/"
          dribbble="https://dribbble.com/fabric8"
        />
        <Card
          name="Roger Lim"
          role="Advisor"
          image="static/team-roger.png"
          experience={[
            'Neo Global Capital Founding Partner',
            'Advisor to Bluzelle, QLink, Tomocoin, 0Chain, Open Platform.'
          ]}
          linkedin="https://linkedin.com/in/limroger/"
        />
      </div>
    </Container>
  </Section>
);

export default Team;
