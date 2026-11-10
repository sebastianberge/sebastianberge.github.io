<!-- omit in toc -->
# sebastianberge.github.io

[![GitHub Pages Deployment](https://github.com/sebastianberge/sebastianberge.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/sebastianberge/sebastianberge.github.io/actions/workflows/deploy.yml)

- [About](#about)
- [Technologies](#technologies)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## About

This web application is designed to showcase a portfolio of my self, my CV and projects I've worked on. I've also added a blog for posting small posts now and then.

To avoid using any database for hosting the blog posts (and avoid coding them in the application code), I've just created a blog-post repository on GitHub. The blog posts are then just fetched directly from there instead of fetching from any database.

## Technologies

**Frontend**
- [React](https://react.dev)
- [Material-UI](https://mui.com/material-ui/)

**Deployment**
- [GitHub Actions](https://github.com/features/actions)

**Hosting**
- [GitHub Pages](https://pages.github.com)

## Acknowledgments
- [Devicons React](https://devicons-react.vercel.app/)
- [github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action)
- [axios](https://github.com/axios/axios)

## License
Distributed under the MIT License. See `LICENSE.txt` for more information.
## Adding posts and updates

Edit `src/data/publications.js` and add an object to the `publications` array:

```js
{
  title: 'Your article title',
  url: 'https://medium.com/@your-profile/your-article',
  date: '2026-11-10',
  source: 'Medium',
  summary: 'An optional short introduction.',
}
```

Use a real publication URL and an ISO date (`YYYY-MM-DD`). Posts appear newest
first. Titles and summaries stay in the publication's original language; section
labels and dates follow the selected site language. The array starts empty so
no example posts are shown to visitors. Commit and deploy changes through the
normal site workflow; there is no separate admin interface.
