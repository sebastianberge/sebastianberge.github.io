const ghpages = require("gh-pages");

ghpages.publish("dist", {
  branch: "gh-pages",
  repo: "https://github.com/sebastianberge/sebastianberge.github.io.git", // Make sure this is your repository URL
  user: {
    name: "Sebastian Berge",
    email: "sebastian@berge.im",
  },
  silent: false,
  dotfiles: true,
  message: "Deploy commit",
  token: process.env.GH_PAT, // Use the environment variable here
});
