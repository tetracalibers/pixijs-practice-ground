const connect = require("connect")
const serveStatic = require("serve-static")
const glob = require("glob")

connect()
  .use(serveStatic(__dirname))
  .listen(8080, () => {
    glob("./**/*.html", (_, files) => {
      files?.forEach((file) => {
        const url = new URL(file, "http://localhost:8080")
        console.log(url.href)
      })
    })
  })
