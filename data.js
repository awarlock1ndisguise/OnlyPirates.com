const icon = document.getElementById('load')

const tleft = document.getElementById('r1n1')
const tmiddle = document.getElementById('r1n2')
const tright = document.getElementById('r1n3')
const mleft = document.getElementById('r2n1')
const middle = document.getElementById('r2n2')
const mright = document.getElementById('r2n3')
const bleft = document.getElementById('r3n1')
const bmiddle = document.getElementById('r3n2')
const bright = document.getElementById('r3n3')

const check = document.getElementById('check')
const reset = document.getElementById('reset')

var r1n1 = false
var r1n2 = false
var r1n3 = false
var r2n1 = false
var r2n2 = false
var r2n3 = false
var r3n1 = false
var r3n2 = false
var r3n3 = false

// 🔑 Any key press → grow/shrink
document.addEventListener('keydown', () => {
  if (icon) {
    icon.classList.toggle('text-8xl');
  }
});

// ⏱ Stop spinning after 3 seconds
setTimeout(() => {
  if (icon) {
    window.location.href="captcha.html";
  }
}, 7000);

tleft.addEventListener('click', () => {
  r1n1 = toggleImage("row-1-column-1.png.webp", tleft, r1n1)
});
tmiddle.addEventListener('click', () => {
  r1n2 = toggleImage("row-1-column-2.png", tmiddle, r1n2)
})
tright.addEventListener('click', () => {
  r1n3 = toggleImage("row-1-column-3.png.webp", tright, r1n3)
})
mleft.addEventListener('click', () => {
  r2n1 = toggleImage("row-2-column-1.png.webp", mleft, r2n1)
})
middle.addEventListener('click', () => {
  r2n2 = toggleImage("row-2-column-2.png.webp", middle, r2n2)
})
mright.addEventListener('click', () => {
  r2n3 = toggleImage("row-2-column-3.png.webp", mright, r2n3)
})
bleft.addEventListener('click', () => {
  r3n1 = toggleImage("row-3-column-1.png.webp", bleft, r3n1)
})
bmiddle.addEventListener('click', () => {
  r3n2 = toggleImage("row-3-column-2.png.webp", bmiddle, r3n2)
})
bright.addEventListener('click', () => {
  r3n3 = toggleImage("row-3-column-3.png", bright, r3n3)
})

function toggleImage(source, position, check) {
  if (check == false) {
    position.src="Red_Square.svg.png"
    check = true
    return check
  }
  else
  {
    position.src=source
    check = false
    return check
  };
}

check.addEventListener('click', () => {
  if (r1n1==true && r1n2==true && r1n3==true && r2n1==true && r2n2==true && r2n3==true && r3n1==true && r3n2==true && r3n3==true) {
    //success thing!!
    location.href = "payment.html"
  }
  else {
    restart()
  }
})

reset.addEventListener('click', () => {
  restart()
})

function restart() {
  r1n1 = true
  r1n2 = true
  r1n3 = true
  r2n1 = true
  r2n2 = true
  r2n3 = true
  r3n1 = true
  r3n2 = true
  r3n3 = true

  r1n1 = toggleImage("row-1-column-1.png.webp", tleft, r1n1)
  r1n2 = toggleImage("row-1-column-2.png", tmiddle, r1n2)
  r1n3 = toggleImage("row-1-column-3.png.webp", tright, r1n3)
  r2n1 = toggleImage("row-2-column-1.png.webp", mleft, r2n1)
  r2n2 = toggleImage("row-2-column-2.png.webp", middle, r2n2)
  r2n3 = toggleImage("row-2-column-3.png.webp", mright, r2n3)
  r3n1 = toggleImage("row-3-column-1.png.webp", bleft, r3n1)
  r3n2 = toggleImage("row-3-column-2.png.webp", bmiddle, r3n2)
  r3n3 = toggleImage("row-3-column-3.png", bright, r3n3)
}

