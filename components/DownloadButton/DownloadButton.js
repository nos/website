import classNames from 'classnames';
import { string } from 'prop-types';

import styles from './DownloadButton.scss';

const DownloadButton = (props) => (
  <a
    className={classNames('button', styles.downloadButton, props.className)}
    href="https://github.com/nos/client/releases"
    target="_blank"
  >
    {props.label}
  </a>
);

DownloadButton.propTypes = {
  className: string,
  label: string
};

DownloadButton.defaultProps = {
  className: null,
  label: 'Download Now'
};

export default DownloadButton;
