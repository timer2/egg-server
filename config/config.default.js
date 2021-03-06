/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require("path")
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589687629030_3642'

  config.multipart = {
    mode: "file",
    whitelist: () => true
  }

  config.UPLOAD_DIR = path.resolve(__dirname, '..', "app/public")

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
    security: {
      csrf: {
        enable: false,
      },
    },
    mongoose: {
      client: {
        // url: 'mongodb://localhost:27017/kaixin',
        url: 'mongodb://106.54.179.243:27017/kaixin',
        options: {},
      },
    },
    jwt: {
      secret: "liukaixin@1@!"
    }
  }
}
