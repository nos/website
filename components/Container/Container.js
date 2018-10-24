import classNames from 'classnames';
import { string } from 'prop-types';

import styles from './Container.scss';

const Container = (props) => (
  <div className={classNames(styles.container, props.className)}>
    {props.children}
  </div>
);

Container.propTypes = {
  className: string
};

export default Container;
