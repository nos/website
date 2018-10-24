import Link from 'next/link';
import classNames from 'classnames';
import { bool } from 'prop-types';

import styles from './Navigation.scss';

const Navigation = (props) => (
  <div className={classNames(styles.navigation, { [styles.icoActive]: props.ico })}>
    <Link href="/"><a className={styles.logo} /></Link>
    <nav className={styles.navItems}>
        <Link href="/#hero"><a>Download</a></Link>
        <Link href="/#tge"><a>Token Sale</a></Link>
      <Link href="/#features"><a>Features</a></Link>
      <Link href="/#showcases"><a>Showcases</a></Link>
      {/* <Link href="/#demo"><a>Create</a></Link> */}
      <Link href="/#team"><a>Team</a></Link>
    </nav>
  </div>
);

Navigation.propTypes = {
  ico: bool
};

Navigation.defaultProps = {
  ico: false
};

export default Navigation;
