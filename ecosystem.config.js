module.exports = {
  apps: [
    {
      name: "Emi",
      script: "./bin/index.js",
      watch: "./src/",
    },
  ],

  deploy: {
    production: {
      user: process.env.key_user,
      host: process.env.key_host,
      key: "./server.key",
      ref: "origin/master",
      repo: "https://github.com/TSkoll/rei-ts.git",
      path: "~/rei-ts",
      "post-deploy": "npm run build && pm2 reload ecosystem.config.js --env production",
    },
  },
};
