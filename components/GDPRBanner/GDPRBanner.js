import Link from 'next/link';
import { bool, func } from 'prop-types';
import { noop } from 'lodash';

import Portal from '../Portal';
import styles from './GDPRBanner.scss';

export default class GDPRBanner extends React.Component {
  static propTypes = {
    accepted: bool,
    onAccept: func
  }

  static defaultProps = {
    accepted: false,
    onAccept: noop
  }

  render() {
    if (this.props.accepted) {
      return null;
    }

    return this.renderBanner();
  }

  renderBanner() {
    return (
      <Portal>
        <div className={styles.gdprBanner}>
          <p>
            This site is using Cookies for Analytics and to improve your browsing experience. To find out
            more, please read our Privacy Policy. By clicking “I Accept”, you consent to our use of
            cookies and agree to our <Link href="/privacy"><a>Privacy Policy</a></Link>.
          </p>
          <button type="button" onClick={this.props.onAccept}>
            I Accept
          </button>
        </div>
      </Portal>
    );
  }
}
