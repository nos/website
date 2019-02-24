import classNames from 'classnames';
import {string} from 'prop-types';
import styles from './DownloadButton.scss';

export default class DownloadButton extends React.Component {

    state = {downloadUrl: "https://github.com/nos/client/releases"};

    setDownloadUrl = async () => {
        let downloadUrl = "https://github.com/nos/client/releases";
        const resp = await fetch('https://api.github.com/repos/nos/client/releases/latest');
        const response = await resp.json();
        const assets = response.assets;
        assets.forEach(asset => {
            const browserDownloadUrl = asset.browser_download_url;
            if ((browserDownloadUrl.endsWith(".exe") && navigator.platform.indexOf('Win') !== -1) || (browserDownloadUrl.endsWith(".dmg") && navigator.platform.indexOf('Mac') !== -1) || (browserDownloadUrl.endsWith(".AppImage") && navigator.platform.indexOf('Linux') !== -1)) {
                this.setState({downloadUrl : browserDownloadUrl});
            }
        })
    }

    componentDidMount() {
            this.setDownloadUrl();
    }


    render() {
        return (
            <a
                className={classNames('button', styles.downloadButton, this.props.className)}
                href={this.state.downloadUrl}
                target="_blank"
            >
                {this.props.label}
            </a>
        )
    }

}

DownloadButton.propTypes = {
    className: string,
    label: string
}

DownloadButton.defaultProps = {
    className: null,
    label: 'Download Now'
}




