import classNames from 'classnames';
import { string, arrayOf } from 'prop-types';

import styles from './Card.scss';

const Card = (props) => (
  <div className={styles.card}>
    <img src={props.image} />
    <h3>{props.name}</h3>
    <span>{props.role}</span>
    <ul className={styles.social}>
      {props.linkedin && (
        <li><a href={props.linkedin} className={classNames(styles.icon, styles.linkedin)}></a></li>
      )}
      {props.twitter && (
        <li><a href={props.twitter} className={classNames(styles.icon, styles.twitter)}></a></li>
      )}
      {props.github && (
        <li><a href={props.github} className={classNames(styles.icon, styles.github)}></a></li>
      )}
      {props.dribbble && (
        <li><a href={props.dribbble} className={classNames(styles.icon, styles.dribbble)}></a></li>
      )}
    </ul>
    <ul className={styles.experience}>
      {props.experience.map((exp) => (
        <li key={exp}>{exp}</li>
      ))}
    </ul>
  </div>
);

Card.propTypes = {
  name: string.isRequired,
  role: string.isRequired,
  image: string.isRequired,
  experience: arrayOf(string).isRequired,
  linkedin: string,
  twitter: string,
  github: string,
  dribbble: string
};

Card.defaultProps = {
  linkedin: null,
  twitter: null,
  github: null,
  dribbble: null
};

export default Card;
