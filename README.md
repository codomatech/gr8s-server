# `gr8s` - the graceful smart frontend server

<img align="right" width="159px" src="https://gr8s-server.codoma.tech/images/gr8s-logo-large.png">
`gr8s` (pronounced like grace (/ɡreɪs/)) is a specialized server for modern web frontends (e.g. apps made with React, Vue, and similar frameworks). Thanks to its smart features, it reduces your app's development time and hosting costs by a big factor.

**Key features:**

- Simplified development workflow & easy integration
- Better control over SEO content
- Faster server load time for your app
- Much smaller carbon footprint of your infrastructure


## How to integrate `gr8s` in your workflow?

`gr8s` replaces your server-side rendering (SSR) logic and infrastructure with a simple server.
You can start using `gr8s` by following these three steps:

1. Configure your tools to generate only the client-side version of your app (i.e. disable SSR).
2. Include template tags in your HTML code.
3. Serve your app's assets using `gr8s`.


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



