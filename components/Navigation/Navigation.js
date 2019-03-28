import Link from 'next/link';
import classNames from 'classnames';
import { bool } from 'prop-types';

import styles from './Navigation.scss';

const Navigation = props => (
  <div className={classNames(styles.navigation, { [styles.fixed]: props.fixed })}>
    <Link href="/">
      <a className={styles.logo} />
    </Link>
    <nav className={styles.navItems}>
      <Link href="/#hero">
        <a>Download</a>
      </Link>
      <Link href="/#features">
        <a>Features</a>
      </Link>
      <Link href="/#token">
        <a>Token</a>
      </Link>
      <Link href="/#showcases">
        <a>Showcases</a>
      </Link>
      {/* <Link href="/#demo"><a>Create</a></Link> */}
      <Link href="/#team">
        <a>Team</a>
      </Link>
      <iframe
        className={styles.starGazer}
        src="https://ghbtns.com/github-btn.html?user=nos&repo=client&type=star&size=large"
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
    </nav>
  </div>
);

Navigation.propTypes = {
  fixed: bool
};

Navigation.defaultProps = {
  fixed: false
};

export default Navigation;
