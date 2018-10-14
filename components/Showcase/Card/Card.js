import classNames from 'classnames';
import { bool, string } from 'prop-types';

import styles from './Card.scss';

const Card = (props) => (
  <div className={classNames(styles.card, styles[props.color], { [styles.primary]: props.primary })}>
    <div className={styles.main}>
      <div className={styles.overlay}>
        <h3>{props.name}</h3>
        <p className={styles.large}>{props.children}</p>
      </div>
      <img src={props.image} />
    </div>
    <div className={styles.meta}>
      <a href={props.url} target="_blank">{props.url}</a>
      <a href={props.code} target="_blank">Code</a>
    </div>
  </div>
);

Card.propTypes = {
  primary: bool,
  color: string,
  name: string.isRequired,
  image: string.isRequired,
  url: string.isRequired,
  code: string.isRequired
};

Card.defaultProps = {
  primary: false,
  color: null
};

export default Card;
