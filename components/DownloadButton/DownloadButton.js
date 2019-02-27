import classNames from 'classnames';
import {string} from 'prop-types';

import { Consumer } from '../Layout/Context';

import styles from './DownloadButton.scss';

const DownloadButton = ({ className, label }) => (
  <Consumer>
    {downloadUrl => console.log(downloadUrl) || (
      <a
        className={classNames('button', styles.downloadButton, className)}
        href={downloadUrl}
        target="_blank"
      >
        {label}
      </a>
    )}
  </Consumer>
);


DownloadButton.propTypes = {
  className: string,
  label: string
}

DownloadButton.defaultProps = {
  className: null,
  label: 'Download Now'
}

export default DownloadButton;
