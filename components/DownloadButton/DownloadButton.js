import styles from './DownloadButton.scss';

const DownloadButton = (props) => (
  <a
    className={`button ${styles.downloadButton}`}
    href="https://github.com/nos/client/releases"
  >
    Download Now
  </a>
);

export default DownloadButton;
