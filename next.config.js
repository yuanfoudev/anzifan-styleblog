/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const { withPlaiceholder } = require("@plaiceholder/next");
const withPWA = require("next-pwa");

module.exports = withPWA(
  withPlaiceholder({
    reactStrictMode: true,
    webpack(config) {
      config.plugins.push(new WindiCSSWebpackPlugin)
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      })
      return config
    },
    images: {
      domains: ['www.notion.so/sjbzh/Test-4c42101985b34bc497179e49f5e7a5cf?pvs=4','wx3.sinaimg.cn', 'images.unsplash.com','cdn.yhz610.com', 'images.adsttc.com', 'www.notion.so/sjbzh/57a9d86d94e84ae0baae7517f5535147?v=7f3dc97af0764a8187b83c5cd869bab7&pvs=4','cdn.yhz610.com','static.anzifan.com', 'cdn.sspai.com', 'cdn.dribbble.com', 'image.freepik.com', 'avatars.githubusercontent.com', 'cdn.jsdelivr.net', 'image.cugxuan.cn', 'blog-static.mikuchan.top', 'amazonaws.com', 'img.zhheo.com', 'www.aohuiliu.fun', 'rxhsk.xicp.fun', 'www.fomal.cc'],
    },
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  }))
