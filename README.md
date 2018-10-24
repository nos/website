# website

## Setup

```bash
yarn install
```

## Usage

For local development, run:

```bash
yarn dev
```

You can then access the site at http://localhost:3000.

## Deployment

The nos.io website is intended to be deployed as a static app.  To deploy, run:

```bash
yarn build && yarn export
```

This will generate a static `out` folder.  The web server must be configured to point to this folder
as the HTML root.
