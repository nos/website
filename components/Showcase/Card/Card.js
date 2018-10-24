import classNames from 'classnames';
import { bool, string } from 'prop-types';
import { isUndefined } from 'lodash';

import DownloadModal from '../../DownloadModal';
import styles from './Card.scss';

export default class Card extends React.Component {
  static propTypes = {
    primary: bool,
    color: string,
    name: string.isRequired,
    image: string.isRequired,
    url: string.isRequired,
    code: string.isRequired
  }

  static defaultProps = {
    primary: false,
    color: null
  }

  state = {
    target: null
  }

  render() {
    return (
      <div className={classNames(styles.card, styles[this.props.color], { [styles.primary]: this.props.primary })}>
        <div className={styles.main}>
          <div className={styles.overlay}>
            <h3>{this.props.name}</h3>
            <p className={styles.large}>{this.props.children}</p>
          </div>
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className={styles.meta}>
          <a href={this.props.url} target="_blank" onClick={this.handleOpen}>{this.props.url}</a>
          <a href={this.props.code} target="_blank">Code</a>
        </div>
        {this.renderModal()}
      </div>
    );
  }

  renderModal = () => {
    if (!this.state.target) {
      return null;
    }

    return (
      <DownloadModal
        target={this.state.target}
        onClose={this.handleClose}
      />
    );
  }

  handleOpen = (event) => {
    if (isUndefined(window.NOS)) {
      event.preventDefault();
      this.setState({ target: event.target.href });
    }
  }

  handleClose = () => {
    this.setState({ target: null });
  }
}
