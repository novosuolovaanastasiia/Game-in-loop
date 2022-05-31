const actor = {
  x: 0,
  y: 0,
  size: 100,
  el: document.getElementById('actor'),
}

main()

async function main() {
  while (true) {
      await gameLoop()
  }

}

async function gameLoop() {
  if (actor.x < innerWidth - actor.size * 2
      && actor.y < actor.size) {
      await moveRight()

  } else if (actor.y < innerHeight - actor.size * 2
      && actor.x > innerWidth / 2) {
      await moveDown()
  } else if (actor.x > 0) {
      await moveLeft()
  }
  else {
      await moveUp()
  }


}

async function moveRight() {
  actor.x += actor.size
  render()
  await sleep(.3)
}
async function moveDown() {
  actor.y += actor.size
  render()
  await sleep(.3)
}
async function moveLeft() {
  actor.x -= actor.size
  render()
  await sleep(.3)
}
async function moveUp() {
  actor.y -= actor.size
  render()
  await sleep(.3)
}


function sleep(delay) {
  return new Promise(resolve => setTimeout(resolve, delay * 1000))
}

function render() {
  actor.el.style.left = actor.x + 'px'
  actor.el.style.top = actor.y + 'px'
}