import classNames from 'classnames';
import { bool, object, oneOf } from 'prop-types';

import styles from './Decorator.scss';

const Decorator = (props) => {
  const className = classNames(
    styles.decorator,
    styles[`version-${props.version}`],
    styles[`animation-${props.animation}`],
    { [styles.outline]: props.outline }
  );

  return <div className={className} style={props.style} />;
};

Decorator.propTypes = {
  version: oneOf([1, 2, 3]),
  animation: oneOf([1, 2, 3, 4, 5]),
  outline: bool,
  style: object
};

Decorator.defaultProps = {
  version: 1,
  animation: 1,
  outline: false,
  style: {}
};

export default Decorator;
