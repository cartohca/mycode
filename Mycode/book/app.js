const a = document.querySelector('input')
const b = document.querySelector('button')
const c = document.querySelector('p')


b.onclick = (el) => {localStorage.setItem('text',a.value)
c.innerText = a.value}
console.log(localStorage.getItem('text'))