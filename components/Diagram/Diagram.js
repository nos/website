import classNames from 'classnames';

import Section from '../Section';
import Container from '../Container';
import Intro from '../Intro';
import styles from './Diagram.scss';

const Diagram = () => (
  <Section className={styles.diagram}>
    <Intro className={styles.intro}>
      <h2>nOS dApp Infrastructure</h2>
    </Intro>
    <Container className={styles.content}>
      <div className={classNames(styles.section, styles.client)}>
        <span className={styles.label}>
          <span className={classNames(styles.connectorNode, styles.incoming)}></span>nOS client
        </span>
        <div className={styles.item}>
          <img src="static/feature-browser.svg" />
          <h3 className={styles.nodeless}><span className={styles.text}>nOS Browser</span></h3>
          <p>
            Applications are served in a sandboxed environment using the end-users’s hard drive and client-side rendering
          </p>
        </div>
        <div className={styles.item}>
          <img src="static/feature-dapps.svg" />
          <h3 className={styles.nodeless}><span className={styles.text}>dApp Gateway</span></h3>
          <p>
            Applications displayed in the dApp Gateway are ranked in a democratic and decentralized manner via decentralized Authority
          </p>
        </div>
      </div>

      <div className={classNames(styles.section, styles.protocol)}>
        <h3><span className={classNames(styles.connectorNode, styles.protocol)}></span>nOS Protocol</h3>
        <p>
          dApps are served through the nOS Protocol, a distributed web protocol that integrates nOS Name Service, accessible by nOS Client
        </p>
      </div>

      <div className={classNames(styles.section, styles.stack)}>
        <span className={classNames(styles.label, styles.top)}>
          <span className={styles.connectorNode}></span>nOS decentralized application stack
        </span>
        <div className={classNames(styles.item, styles.fe)}>
          <img src="static/diagram-fe-app.svg" />
          <h3>
            <span className={classNames(styles.connectorNode, styles.incoming)}></span>
            <span className={styles.text}>
              nOS API Front-end<br /> Application
            </span>
            <span className={classNames(styles.connectorNode, styles.right, styles.incoming)} id="node--api" />
          </h3>
        </div>
        <div className={classNames(styles.item, styles.filesystem)}>
          <img src="static/diagram-filesystem.svg" />
          <h3><span className={styles.connectorNode}></span><span className={styles.text}>Decentralized<br />Filesystem</span><span id="node--filesystemB"></span></h3>
        </div>
        <div className={classNames(styles.item, styles.backend)}>
          <img src="static/diagram-backend.svg" />
          <h3><span className={styles.connectorNode}></span>Back-end</h3>
          <ul>
            <li>HTTP Requests may be made from the client side</li>
            <li>The end-user can review and approve HTTP requests via the same method as transactions and invocations</li>
          </ul>
        </div>
        <div className={classNames(styles.item, styles.contracts)}>
          <img className={styles.connectorLine} src="static/connector-smart-contract.svg" />
          <img src="static/diagram-smart-contracts.svg" />
          <h3><span className={styles.connectorNode}></span>Smart Contract Platform</h3>
          <p>
            Applications can choose to build their back-end using smart contracts
          </p>
        </div>
      </div>
    </Container>
  </Section>
);

export default Diagram;
