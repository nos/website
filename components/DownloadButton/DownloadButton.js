import classNames from 'classnames';
import { string, bool } from 'prop-types';

import { Consumer } from '../Layout/Context';

import styles from './DownloadButton.scss';

const DownloadButton = ({ className, label }) => (
  <Consumer>
    {downloadUrl => (
      <React.Fragment>
        <a className={classNames('button', styles.downloadButton, className)} href={downloadUrl}>
          {label}
        </a>
      </React.Fragment>
    )}
  </Consumer>
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
