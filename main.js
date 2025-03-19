document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}

function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}

function yellow() {
  document.body.style.backgroundColor = 'yellow'
}

function reset() {
  document.body.style.backgroundColor = 'linen'
}

function showtml() {
  document.getElementById('fig').src = 'image/html.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다</b>'
}

function showcss() {
  document.getElementById('fig').src = 'image/css.png'
  document.getElementById('desc').innerHTML =
    'HTML 문서의 스타일을 지정하기 위한 언이다.</b>'
}

function showjs() {
  document.getElementById('fig').src = 'image/javascript.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다</b>'
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
