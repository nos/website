import classNames from 'classnames';
import { oneOf } from 'prop-types';

import styles from './SocialIcon.scss';

const CLASSES = {
  discord: styles.discord,
  medium: styles.medium,
  reddit: styles.reddit,
  telegram: styles.telegram,
  twitter: styles.twitter
};

const SocialIcon = (props) => (
  <a href={props.href} className={classNames(styles.socialIcon, CLASSES[props.name])} />
);

SocialIcon.propTypes = {
  name: oneOf(Object.keys(CLASSES)).isRequired
};

export default SocialIcon;
