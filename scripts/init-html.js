// @ts-check

import fs from "fs-extra"

const title = process.argv[2]

const dir = title
await fs.mkdir(dir)
await fs.writeFile(dir + "/index.js", "")

await fs.writeFile(
  dir + "/index.html",
  `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title.replace("/", " - ")}</title>
      <script type="module" src="./index.js"></script>
      <style>
        body {
          margin: 0;
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <canvas id="pixi-canvas">
        Your browser does not support the HTML5 canvas Element.
      </canvas>
    </body>
  </html>
`.trimStart()
)
