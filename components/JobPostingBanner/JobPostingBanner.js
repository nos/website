import Link from 'next/link';
import { bool, func } from 'prop-types';
import { noop } from 'lodash';

import Portal from '../Portal';
import styles from './JobPostingBanner.scss';

export default class JobPostingBanner extends React.Component {
  static propTypes = {
    closed: bool,
    onClose: func
  }

  static defaultProps = {
    closed: false,
    onClose: noop
  }

  render() {
    if (this.props.closed) {
      return null;
    }

    return this.renderBanner();
  }

  renderBanner() {
    return (
        <div className={styles.gdprBanner}>
          <p>
            We're hiring! <Link href="static/job-posting.pdf"><a>Hybrid React &amp; React Native Developer</a></Link>.
          </p>
          <button type="button" onClick={this.props.onClose}>
            Close
          </button>
        </div>
    );
  }
}
