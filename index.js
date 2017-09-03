/**
 * 主要为了测试下编译成dist后的静态文件是否能正确访问与执行
 */
const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa()
app.use(serve('./dist'))

app.listen(3000)
