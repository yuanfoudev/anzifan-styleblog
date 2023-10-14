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
      domains: ['jsd.lihaoyu.cn','prod-files-secure.s3.us-west-2.amazonaws.com','file.notion.so','i0.hdslb.com','media4.giphy.com', 'images.unsplash.com','cdn.yhz610.com', 'images.adsttc.com','cdn.yhz610.com','static.anzifan.com', 'cdn.sspai.com', 'cdn.dribbble.com', 'image.freepik.com', 'avatars.githubusercontent.com', 'cdn.jsdelivr.net', 'image.cugxuan.cn', 'blog-static.mikuchan.top', 'amazonaws.com', 'img.zhheo.com', 'www.aohuiliu.fun', 'rxhsk.xicp.fun', 'www.fomal.cc'],
    },
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  }))
