const Koa = require('koa')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()

router.get('/', (ctx) => {
  ctx.body = '<h1>ANASAYFAYA HOSGELDINIZ</h1>'
})

router.get('/hakkimda', (ctx) => {
  ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>'
})

router.get('/iletisim', (ctx) => {
  ctx.body = '<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>'
})

app.use(router.routes()).use(router.allowedMethods())

const port = 3000

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
