import classNames from 'classnames';
import { string, arrayOf } from 'prop-types';

import styles from './Card.scss';

const Card = (props) => (
  <div className={styles.card}>
    <img src={props.image} />
    <h3>{props.title}</h3>
  </div>
);

Card.propTypes = {
  title: string.isRequired,
  image: string.isRequired,
};

export default Card;
