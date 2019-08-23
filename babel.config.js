module.exports = api => {
  var env = api.cache(() => process.env.NODE_ENV);
  api.cache(true);
  const presets = [
    require("@babel/preset-env"),
    require("@babel/preset-react"),
  ];
  const plugins = [
    require("@babel/plugin-proposal-class-properties"),
  ];

  if(env === 'test'){
    plugins.push("require-context-hook");
  }

  return {presets, plugins};
};