import classNames from 'classnames';
import { string } from 'prop-types';

import styles from './Intro.scss';

const Intro = (props) => (
  <div className={classNames(styles.intro, props.className)}>
    {props.children}
  </div>
);

Intro.propTypes = {
  className: string
};

Intro.defaultProps = {
  className: null
};

export default Intro;
