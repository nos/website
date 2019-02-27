import classNames from 'classnames';
import { string, bool } from 'prop-types';

import { Consumer } from '../Layout/Context';

import styles from './DownloadButton.scss';

const DownloadButton = ({ className, label, starGazer }) => (
  <Consumer>
    {downloadUrl => (
      <React.Fragment>
        <a className={classNames('button', styles.downloadButton, className)} href={downloadUrl}>
          {label}
        </a>
        {starGazer && (
          <iframe
            className={styles.starGazer}
            src="https://ghbtns.com/github-btn.html?user=nos&repo=client&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
            width="160px"
            height="30px"
          />
        )}
      </React.Fragment>
    )}
  </Consumer>
);

DownloadButton.propTypes = {
  className: string,
  label: string,
  starGazer: bool
};

DownloadButton.defaultProps = {
  className: null,
  label: 'Download Now',
  starGazer: false
};

export default DownloadButton;
