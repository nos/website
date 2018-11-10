import Router from 'next/router'

export default function redirect(context, location) {
  const { res } = context;

  if (res) {
    res.writeHead(302, { Location: location });
    res.end();
  } else {
    Router.push(location);
  }
}
