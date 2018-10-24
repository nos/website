import { string, func } from 'prop-types';
import { noop } from 'lodash';

import Modal from '../Modal';
import DownloadButton from '../DownloadButton';
import styles from './DownloadModal.scss';

export default class DownloadModal extends React.Component {
  static propTypes = {
    target: string.isRequired,
    onClose: func
  }

  static defaultProps = {
    onClose: noop
  }

  render() {
    return (
      <Modal className={styles.downloadModal} renderHeader={this.renderHeader}>
        <div className={styles.content}>
          <div className={styles.appIcon} />
          <div className={styles.message}>This application can only be opened in nOS Client</div>
        </div>
        <DownloadButton className={styles.download} label="Click here to download now" />
      </Modal>
    );
  }

  renderHeader = () => {
    return (
      <div className={styles.header}>
        <span className={styles.title}>
          You are trying to open <strong>{this.props.target}</strong>
        </span>
        <span
          className={styles.close}
          tabIndex="0"
          role="button"
          onClick={this.props.onClose}
        />
      </div>
    );
  }
}
