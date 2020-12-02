// art16 = document.getElementById('.16')
// art32 = document.getElementById('.32')
// animation = document.getElementById('.animation')
// isometric = document.getElementById('.isometric')
// tileset = document.getElementById('.tileset')

// toall.addEventListener('click', () => {
//   [...document.getElementsByClassName('16')].forEach((item) => {
//     item.classList.add('block')
//     item.classList.remove('hidden')
//   });
//   [...document.getElementsByClassName('32')].forEach((item) => {
//     item.classList.add('block')
//     item.classList.remove('hidden')
//   });
//   [...document.getElementsByClassName('animation')].forEach((item) => {
//     // item.classList.add('block')
//     item.classList.add('hidden')
//   });
//   [...document.getElementsByClassName('isometric')].forEach((item) => {
//     item.classList.add('block')
//     item.classList.remove('hidden')
//   });
//   [...document.getElementsByClassName('tileset')].forEach((item) => {
//     // item.classList.add('block')
//     item.classList.remove('hidden')
//   });
// })

to16.addEventListener('click', () => {
  [...document.getElementsByClassName('16')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
  [...document.getElementsByClassName('32')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('animation')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('isometric')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('tileset')].forEach((item) => {
    item.classList.add('hidden')
  });
})

to32.addEventListener('click', () => {
  [...document.getElementsByClassName('16')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('32')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
  [...document.getElementsByClassName('animation')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('isometric')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('tileset')].forEach((item) => {
    item.classList.add('hidden')
  });
})

toAnimation.addEventListener('click', () => {
  [...document.getElementsByClassName('16')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('32')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('animation')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
  [...document.getElementsByClassName('isometric')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('tileset')].forEach((item) => {
    item.classList.add('hidden')
  });
})

toIsometric.addEventListener('click', () => {
  [...document.getElementsByClassName('16')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('32')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('animation')].forEach((item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('isometric')].forEach( (item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
  [...document.getElementsByClassName('tileset')].forEach((item) => {
    item.classList.add('hidden')
  });
})

toTileset.addEventListener('click', () => {
  [...document.getElementsByClassName('16')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('32')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('animation')].forEach((item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('isometric')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('tileset')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
})
