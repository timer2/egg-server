'use strict'

const svgCaptcha = require('svg-captcha')

const Controller = require('egg').Controller

class UtilController extends Controller {
  async captcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      hegiht: 50,
      noise: 3,
    })
    // 将验证码存起来，校验
    this.ctx.session.captcha = captcha.text
    this.ctx.response.type = 'image/svg+xml'
    this.ctx.body = captcha.data
  }
}

module.exports = UtilController