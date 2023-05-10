import * as PIXI from "../../../node_modules/pixi.js/dist/pixi.mjs"

const size = Math.min(window.innerWidth, window.innerHeight)

const app = new PIXI.Application({
  background: "#95BDFF",
  backgroundAlpha: 0.5,
  width: size,
  height: size,
  autoResize: true
})
document.body.appendChild(app.view)

const container = new PIXI.Container()

app.stage.addChild(container)

// Create a new texture
const texture = PIXI.Texture.from("/assets/tetra_op.png")

// Create a 5x5 grid of bunnies
for (let i = 0; i < 25; i++) {
  const item = new PIXI.Sprite(texture)
  item.width = 40
  item.height = 40
  item.anchor.set(0)
  item.x = (i % 5) * 40
  item.y = Math.floor(i / 5) * 40
  container.addChild(item)
}

// Move container to the center
container.x = app.screen.width / 2
container.y = app.screen.height / 2

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2
container.pivot.y = container.height / 2

// Listen for animate update
app.ticker.add((delta) => {
  // rotate the container!
  // use delta to create frame-independent transform
  container.rotation -= 0.01 * delta
})
