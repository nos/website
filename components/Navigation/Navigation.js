import styles from './Navigation.scss';

const Navigation = () => (
  <div className={styles.navMain}>
    <a className={styles.logo} href="#">
      <img src="static/nos-logo-positive.svg" width="113" />
    </a>
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
