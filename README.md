# `gr8s` - the graceful smart frontend server

[![Security Scan Results](https://github.com/codomatech/gr8s-server/actions/workflows/security-scan.yml/badge.svg)](https://github.com/codomatech/gr8s-server/actions/)


<img align="right" width="159px" src="https://gr8s-server.codoma.tech/images/gr8s-logo-large.png">

 `gr8s` (pronounced like grace (/ɡreɪs/)) is a specialized server for modern web frontends (e.g. apps made with React, Vue, and similar frameworks). Thanks to its smart features, it reduces your app's development time and hosting costs by a big factor.

**Key features:**
- Implement SEO in SPA **without the pain of SSR**
- Simplified development workflow & easy integration
- Better control over SEO content
- Faster server load time for your app
- Much smaller carbon footprint of your infrastructure

## Table of Contents
- [`gr8s` - the graceful smart frontend server](#gr8s---the-graceful-smart-frontend-server)
  - [How to integrate `gr8s` in your workflow?](#how-to-integrate-gr8s-in-your-workflow)
    - [1. Configure your app for CSR](#1-configure-your-app-for-csr)
    - [2. Prepare your data source](#2-prepare-your-data-source)
    - [3. Include template tags in your HTML code](#3-include-template-tags-in-your-html-code)
    - [4. Serve your app's assets using `gr8s`](#4-serve-your-apps-assets-using-gr8s)
  - [Frequently Asked Questions](#frequently-asked-questions)
  - [Support Options](#support-options)


## How to integrate `gr8s` in your workflow?

`gr8s` replaces your server-side rendering (SSR) logic and infrastructure with a simple server.
You can start using `gr8s` by following these four steps:

1. Configure your tools to generate only the client-side version of your app (i.e. disable SSR).
2. Prepare your data source
3. Include template tags in your HTML code.
4. Serve your app's assets using `gr8s`.


### 1. Configure your app for CSR

*If you didn't implement Server-Side Rendering, you can skip this step*

Client-Side rending (CSR) means rendering your app is fully done on the client side (i.e. the browser).

The outcome of CSR build process is a set of html, javascript, and css files ready to run by the browser.
CSR is pervasively supported by modern Javascript frameworks.
Here are some examples of CSR build commands for popular frameworks:

Next.js:

```bash
next build && next export
```

Nuxt.js:

```bash
# in nuxt.config.ts, set ssr to false, then
npx nuxi generate
```

For other frameworks, please consult the respective documentation or [consult our issues](/../../issues).


### 2. Prepare your data source

*Data source* is a store of the content which should appear in your app's different paths/urls.
In its simplest forms, a data source is a JSON file where the key represents the page url and the value
is an object of various variables which can be used as template tags (as explained in the next section).

An [example data source](/examples/nextjs-strapi/gr8s/data-source.json) looks like this:

```json
{
  "article/the-internet-s-own-boy": {
    "content": "STRAPI BLOG\nNEWS\nTECH\nFOOD\nNATURE\nSTORY\nThe internet's Own boy\n….\n\nBy\n\nAug 9th 2023"
  }
}

```

### 3. Include template tags in your HTML code

To provide server-side content, `gr8s` uses a template syntax similar to [Jinja](https://palletsprojects.com/p/jinja/).
This means you will need to edit your HTML code (often your `index.html` file) to add something similar to this code:

```html
<html>
…
<body>
    …
    <!--{{content}}-->
    …
</body>
</html>
```

In this template, the variable `content` is replaced by the value associated with the page's url in the data source
you defined in the previous step.


### 4. Serve your app's assets using `gr8s`

Now you are ready to replace your SSR server with our leaner alternative.
`gr8s` is available as a docker image. The app expects the main configuration file
at `/etc/gr8s/config.json`. Here is [an example config.json](/examples/nextjs-strapi/gr8s/config.json).

One way to start `gr8s` would look like this:

```bash
docker run \
    -v <path-to-your-app-root>:/var/www \
    -v <path-to-gr8s-config>:/etc/gr8s \
    --network host \
    codomatech/gr8s
```

## Frequently Asked Questions

An up-to-date version is maintained on [`gr8s` landing page](https://gr8s-server.codoma.tech/#faq).


## Support Options

`gr8s` has the potential to offer additional benefits for your app. If you wish to:

- have a snappy user experience (e.g. shorter time to largest contentful paints, smaller blocking time, minimal layout reflows).
- have your app working *without Javascript* (i.e. implement progressive enhancement).

We offer plans where we do the work for you. Please check our [plans](https://gr8s-server.codoma.tech/#pricing).


---
`gr8s` is a product of [Codoma.tech](https://www.codoma.tech/).
