import React from 'react';

import redirect from '../helpers/redirect';

export default class extends React.Component {
  static async getInitialProps(context) {
    redirect(context, '/static/whitepaper.pdf');
    return {};
  }
}
