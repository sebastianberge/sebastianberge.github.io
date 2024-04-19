const ghpages = require("gh-pages");

ghpages.publish("build", {
  branch: "gh-pages",
  repo: "https://github.com/sebastianberge/sebastianberge.github.io.git",
  user: {
    name: "Sebastian Berge",
    email: "sebastian@berge.im",
  },
  silent: false,
  dotfiles: true,
  message: "Deploy commit",
  token: process.env.GH_PAT,
});
