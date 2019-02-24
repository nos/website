import fetch from 'isomorphic-unfetch';

import Section from '../Section';
import Container from '../Container';
import styles from './Newsletter.scss';
import SocialIcon from '../SocialIcon';

export default class Newsletter extends React.Component {
  state = {
    email: '',
    disabled: false
  };

  render() {
    return (
      <Section className={styles.newsletter}>
        <Container className={styles.container}>
          <div className={styles.titleLeft}>
            <h2>Stay in touch</h2>
            <p className={styles.large}>Sign up to the newsletter to get our latest news & updates. Get engaged with our community.</p>
          </div>
          <div className={styles.socialItems}>
            <div className={styles.newsletterForm}>
              <form
                className={styles.fields}
                action="https://email.macrowish.com/subscribe"
                method="post"
                disabled={this.state.disabled}
                onSubmit={this.handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  aria-required="true"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                />
                <input
                  type="submit"
                  name="subscribe"
                  value="Sign up"
                />
              </form>
              <div className={styles.socialIcons}>
                <SocialIcon name="twitter" href="https://twitter.com/nOSplatform" />
                <SocialIcon name="reddit" href="https://www.reddit.com/r/nOSplatform" />
                <SocialIcon name="discord" href="https://discord.nos.io/" />
                <SocialIcon name="telegram" href="https://t.me/nOSchat" />
                <SocialIcon name="medium" href="https://medium.com/nos-io" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  handleChange = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    event.persist();
    this.setState({ disabled: true }, async () => await this.submit(event));
  }

  submit = async (event) => {
    const { email } = this.state;
    const { action, method } = event.target;

    const body = new FormData();
    body.append('email', email);
    body.append('boolean', 'true');
    body.append('list', 'cqsGQa39CKWab3nHnQyeCA');

    try {
      const response = await fetch(action, { method, body });
      const data = await response.text();

      if (!data) {
        throw new Error('Empty server response.');
      }

      alert(this.translateResponse(data));
    } catch (err) {
      alert(`Sorry, but an unexpected error was encountered. Please try again later. (${err.message})`);
    } finally {
      this.setState({ disabled: false });
    }
  }

  translateResponse = (data) => {
    switch (data) {
      case "Invalid list ID.":
        return "Invalid list ID.";
      case "Invalid email address.":
        return "Your email address is invalid.";
      case "Some fields are missing.":
        return "Please enter your email address.";
      case "Already subscribed.":
        return "You're already subscribed!";
      default:
        return "Check your e-mail for a confirmation link.";
    }
  }
}
