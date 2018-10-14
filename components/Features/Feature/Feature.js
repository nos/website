import classNames from 'classnames';
import { bool, func } from 'prop-types';

import Container from '../../Container';
import styles from './Feature.scss';

export default class Feature extends React.Component {
  static propTypes = {
    flip: bool,
    renderImage: func.isRequired
  }

  static defaultProps = {
    flip: false
  }

  render() {
    return (
      <div className={styles.feature}>
        <Container className={classNames(styles.container, { [styles.flip]: this.props.flip })}>
          {this.renderContent()}
        </Container>
      </div>
    );
  }

  renderContent = () => {
    const { flip } = this.props;

    if (flip) {
      return (
        <React.Fragment>
          {this.renderImage(false)}
          {this.renderText(true)}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {this.renderText(false)}
          {this.renderImage(true)}
        </React.Fragment>
      );
    }
  }

  renderText = (right) => {
    return (
      <div className={classNames(styles.text, { [styles.right]: right })}>
        {this.props.children}
      </div>
    );
  }

  renderImage = (right) => {
    return (
      <div className={classNames(styles.image, { [styles.right]: right })}>
        {this.props.renderImage()}
      </div>
    );
  }
}
