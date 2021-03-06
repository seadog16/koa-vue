const Koa = require('koa'),
    router = require('koa-router')(),
    path = require('path'),
    cors = require('koa-cors'),
    bodyParser = require('koa-bodyparser'),
    account = require('./routes/account.js'),
    article = require('./routes/article.js'),
    app = new Koa();
// console.log('判断path是不是node.js的原生模块=', process.binding('natives').hasOwnProperty('path'));
app.use(bodyParser()); //配置post提交数据的中间件
app.use(router.routes()); //启动路由
app.use(router.allowedMethods());
router.use('/account', account.routes(), account.allowedMethods());
router.use('/article', article.routes(), account.allowedMethods());


app.use(cors()); //跨域解决
app.listen(8081, () => {
    console.log('启动成功！');
})