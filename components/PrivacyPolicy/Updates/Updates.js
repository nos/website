import { string } from 'prop-types';

const Updates = (props) => (
  <React.Fragment>
    <h1>
      <strong>UPDATES</strong>
    </h1>
    <p align="justify">
      We reserve the right, at Our complete discretion, to change, modify, add
      and/or remove portions of this Privacy Policy at any time. If You are an
      existing client with whom We have a contractual relationship You shall be
      informed by Us of any changes made to this Privacy Policy (as well as other
      terms and conditions relevant to the Site). We shall also archive and store
      previous versions of the Privacy Policy for Your review.
    </p>
    <p align="justify">
      As a User of the Site with which We have no contractual relationship or
      even a lawful way of tracing, it is in Your interest to regularly check for
      any updates to this Privacy Policy (which are usually deemed to be
      effective on the date they are published on the Site), in the event that
      Our attempts to notify You of such updates do not reach You.
    </p>
    <p lang="en-US" align="justify">
      <br />
    </p>
    <p lang="en-US" align="justify">
      <u><strong>Last Updated on {props.lastUpdate}</strong></u>
    </p>
  </React.Fragment>
);

Updates.propTypes = {
  lastUpdate: string.isRequired
};

export default Updates;
