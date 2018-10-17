import classNames from 'classnames';
import styles from './Navigation.scss';

const Navigation = () => (
  <div className={classNames(styles.navMain, styles.icoActive)}>
    <a className={styles.logo} href="#"></a>
    <nav className={styles.navItems}>
      <a href="#tge">Token Sale</a>
      <a href="#features">Features</a>
      <a href="#showcases">Showcases</a>
      <a href="#demo">Create</a>
      <a href="#team">Team & Advisors</a>
    </nav>
  </div>
);

export default Navigation;
