import styles from './DownloadButton.scss';

const DownloadButton = (props) => (
  <a
    className={`button ${styles.downloadButton}`}
    href="https://github.com/nos/client/releases"
    target="_blank"
  >
    Download Now
  </a>
);

export default DownloadButton;
