// @ts-check

import fs from "fs-extra"
import path from "path"

const title = process.argv[2]

const dir = path.join(process.cwd(), "examples", title)
await fs.mkdir(dir, { recursive: true })
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
    <body></body>
  </html>
`.trim()
)
