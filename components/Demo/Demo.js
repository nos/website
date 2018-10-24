import Section from '../Section';
import Container from '../Container';
import Intro from '../Intro';

import styles from './Demo.scss';

const codeSample = `const nos = window.NOS.V1;

let myAddress = nos.getAddress();
let friendUsername = 'Dave';

const scriptHash = '2f228c37687d474d0a65d7d82d4ebf8a24a3fcbc';
const operation = 'sendInvite';
const args = [myAddress, friendUsername];

nos.invoke({ scriptHash, operation, args })
   .then((txid) => {
     // Do something
   })`;

const Demo = () => (
  <Section className={styles.demo}>
    <Container>
      <a name="demo" />

      <Intro className={styles.intro}>
        <h2>Create</h2>
        <p className={styles.large}>
          See for yourself how easy it is... full sentence :)
        </p>
      </Intro>

      <div>
        <ul className={styles.slider}>
          <li className={styles.active}>Smart Contract</li>
          <li>Transfer Funds</li>
          <li>Account</li>
        </ul>
        <div className={styles.item}>
          <div className={styles.output}></div>
          <div className={styles.code}>
            <pre>{codeSample}</pre>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

export default Demo;
