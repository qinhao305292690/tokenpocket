module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }],
    "lodash",
    "@babel/plugin-proposal-optional-chaining", // 可选链 ?.
    "@babel/plugin-proposal-nullish-coalescing-operator", //  ?? 默认值
  ]
}
