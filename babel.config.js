module.exports = api => {
  api.cache.forever();
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "16.13.0"
          },
          bugfixes: true,
          useBuiltIns: "usage",
          corejs: "3.21.0",
          shippedProposals: true
        }
      ],
      "@babel/preset-typescript"
    ]
  };
};

